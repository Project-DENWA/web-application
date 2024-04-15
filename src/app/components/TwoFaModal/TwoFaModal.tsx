import Image from 'next/image';
import QR from '@/../public/QR.png';
import css from './TwoFaModal.module.scss';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Separator } from '@/shared/ui/separator';
import MyTooltip from '@/shared/ui/myTooltip';
import ShowKeyButton from './_components/ShowKeyButton';
import { useTranslations } from 'next-intl';

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  children: React.ReactNode;
};

export default function TwoFaModal({
  open,
  setIsOpen,
  children,
}: Props): JSX.Element {
  const t = useTranslations('settings.account.2fa.modal');
  return (
    <Dialog modal={true} open={open} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={css.dialogContent}>
        <DialogHeader>
          <DialogTitle className={css.title}>
            <h1>{t('title')}</h1>
            <MyTooltip>{t('tooltip')}</MyTooltip>
          </DialogTitle>
        </DialogHeader>
        <Image alt="QR Code" src={QR} width={200} height={200} />
        <div className={css.separator}>
          <Separator orientation="horizontal" decorative />
          <p className="text-light-text-main-50 dark:text-light-text-main-50">
            {t('or')}
          </p>
          <Separator orientation="horizontal" decorative />
        </div>
        <DialogFooter className={css.footer}>
          <ShowKeyButton keyValue="69e1-4921-8bb8-997827b5b6ff" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
