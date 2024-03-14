"use client"
import { useEffect, useState, useRef } from 'react';
import css from './Avatar.module.scss';
import Image from 'next/image';
import camera from '@/../public/account/Camera.svg';
import { AvatarSchema } from './schema';
import { ZodError } from 'zod';
import { toast } from 'sonner';
import { useUpdateAvatarMutation} from '@/shared/redux/features/authApi';

export default function Avatar() {
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  const defaultAvatar: string = '/account/AvatarForTest.png';
  const [errors, setErrors] = useState<string[]>([]);
  const [isErrorsShown, setIsErrorsShown] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [updateAvatar, { isSuccess }] = useUpdateAvatarMutation();
  const [fileId, setFileId] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    try {
      AvatarSchema.parse({
        name: file.name,
        type: file.type,
        size: file.size,
      });
      setErrors([]);
      const formData = new FormData();
      formData.append('newAvatar', file);
      const response = await updateAvatar(formData).unwrap();

      if (response.ok) {
        const fileId = response.result;
        setFileId(fileId);
        toast.success("Аватар успешно изменён!");
      }
    } catch (validationError: unknown) {
      if (validationError instanceof ZodError) {
        const errorMessages: string[] = [];
        if (validationError.errors.some((err) => err.path[0] === 'size')) {
          errorMessages.push('Размер не должен превышать 2 МБ');
        }
        if (validationError.errors.some((err) => err.path[0] === 'type')) {
          errorMessages.push('Неподдерживаемый формат изображения');
        }
        setErrors(errorMessages);
        setIsErrorsShown(true);
      }
    }
  };

  useEffect(() => {
    if (!isErrorsShown) return;
    if (errors.length > 0) {
      errors.forEach((errorMessage) => {
        toast(errorMessage);
      });
    }
    setIsErrorsShown(false);
  }, [isErrorsShown]);

  const displayedAvatar = avatarImage || defaultAvatar;

  const handleWrapperClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  return (
    <div className={css.wrapper} onClick={handleWrapperClick}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <label className={css.change}>
        <Image
          src={camera}
          alt="Camera icon"
          width={35}
          height={35}
        />
      </label>
      <Image
        src={displayedAvatar}
        alt="Avatar"
        width={104}
        height={104}
        className={css.avatar}
      />
    </div>
  );
}
