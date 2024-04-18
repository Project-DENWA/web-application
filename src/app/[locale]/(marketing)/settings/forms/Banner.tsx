'use client';

import css from '../settings.module.scss';

import React, { useEffect, useState } from 'react';

import { useAuth } from '@/shared/lib/hooks/useAuth';
import {
  AvatarData,
  getUserData,
  setUserData,
} from '@/shared/lib/localstorage';
import { UserData } from '@/shared/lib/localstorage';
import { useUpdateBannerMutation } from '@/shared/redux/features/authApi';

import Banner from '@/shared/ui/Banner';
import { Input } from '@/shared/ui/input';
import { toast } from 'sonner';

import camera from '@/../public/account/Camera.svg';
import Image from 'next/image';

export default function FormBanner() {
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const [file, setFile] = useState<File | null>(null);
  const [update, { isLoading }] = useUpdateBannerMutation();

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

    formData.append('newCover', fileWithLowerCaseName);
    const payload = {
      userId: user?.id,
      newCover: formData,
    };
    return update(payload).unwrap();
  };

  const handleClick = (data: File) => {
    toast.promise(uploadFile(data), {
      loading: 'Обновление баннера...',
      success: (response) => {
        console.log(response);
        const userData = getUserData();
        if (userData && userData.avatar) {
          const updatedAvatarData: AvatarData = {
            ...userData.avatar,
            cover: response.result.url,
          };
          const updatedUserData: UserData = {
            ...userData,
            avatar: updatedAvatarData,
          };
          setUserData(updatedUserData);
          updateAuthInfo(updatedUserData, true);
        }
        return 'Баннер успешно обновлён!';
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
    <div className={css.banner}>
      <form className={css.hidden} role="button">
        {!userLoading || !isLoading ? (
          <Image className={css.imagePlus} alt="Camera" src={camera} />
        ) : (
          ''
        )}
        <Banner
          url={user?.avatar.cover || undefined}
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
