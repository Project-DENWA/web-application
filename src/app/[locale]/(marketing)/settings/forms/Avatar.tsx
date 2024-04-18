'use client';

import css from '../settings.module.scss';

import React, { useEffect, useState } from 'react';

import { useAuth } from '@/shared/lib/hooks/useAuth';
import { getUserData, setUserData } from '@/shared/lib/localstorage';
import { UserData, AvatarData } from '@/shared/lib/localstorage';
import { useUpdateAvatarMutation } from '@/shared/redux/features/authApi';

import Avatar from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/input';
import { toast } from 'sonner';

import camera from '@/../public/account/Camera.svg';
import Image from 'next/image';

export default function FormAvatar() {
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const [file, setFile] = useState<File | null>(null);
  const [update, { isLoading }] = useUpdateAvatarMutation();

  const { user, updateAuthInfo } = useAuth();
  useEffect(() => {
    if (user) {
      setUserLoading(false);
    }
  }, [user]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (file) {
      handleClick(file);
    }
  }, [file]);

  const uploadFile = async (data: File) => {
    const formData = new FormData();
    const fileWithLowerCaseName = new File([data], data.name.toLowerCase(), {
      type: data.type,
      lastModified: data.lastModified,
    });

    formData.append('newAvatar', fileWithLowerCaseName);
    const payload = {
      userId: user?.id,
      newAvatar: formData,
    };
    return update(payload).unwrap();
  };

  const handleClick = (data: File) => {
    toast.promise(uploadFile(data), {
      loading: 'Обновление аватара...',
      success: (response) => {
        // console.log(response);
        const userData = getUserData();
        if (userData && userData.avatar) {
          const updatedAvatarData: AvatarData = {
            ...userData.avatar,
            icon: response.result.url,
          };

          const updatedUserData: UserData = {
            ...userData,
            avatar: updatedAvatarData,
          };

          setUserData(updatedUserData);
          updateAuthInfo(updatedUserData, true);
          // console.log('Updated user data:', updatedUserData);
          // console.log('url from server', response.result.url);
        }
        return 'Аватар успешно обновлён!';
      },
      error: (e: any) => {
        console.log(e);
        if (e.data?.message) {
          return `Уупс... ${e.data.message};`;
        } else {
          return 'Уупс... что-то пошло не так';
        }
      },
    });
  };
  return (
    <div className={css.hiddenWrapper}>
      <form className={css.hidden} role="button">
        {!userLoading || !isLoading ? (
          <Image className={css.imagePlus} alt="Camera" src={camera} />
        ) : (
          ''
        )}
        <Avatar
          url={user?.avatar.icon || undefined}
          className={css.image}
          isLoading={userLoading || isLoading ? true : false}
        />
        <Input
          className={css.input}
          multiple={false}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => handleFileChange(e)}
        />
      </form>
    </div>
  );
}
