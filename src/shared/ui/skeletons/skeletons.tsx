import { LoadingSpinner } from '../loading-spinner';
import css from './skeletons.module.scss';
import { cn } from '@/shared/lib/utils';
type Props = {
  width?: string;
  maxWidth?: string;
  height?: string;
};

const wrapperClass10 = cn(
  css.wrapper,
  'bg-light-main-colored-10 dark:bg-dark-main-colored-10',
);

export function Button({ width, height }: Props) {
  const style = {
    ...(width && { width }),
    ...(height && { height }),
  };
  return <div className={`${css.button} ${css.pulsate}`} style={style} />;
}
export function Label({ width, height }: Props) {
  const style = {
    ...(width && { width }),
    ...(height && { height }),
  };
  return <div className={`${css.label} ${css.pulsate}`} style={style} />;
}
export function Input({ width, height }: Props) {
  const style = {
    ...(width && { width }),
    ...(height && { height }),
  };
  return <div className={`${css.input} ${css.pulsate}`} style={style} />;
}
export function Div({ width, height }: Props) {
  const style = {
    ...(width && { width }),
    ...(height && { height }),
  };
  return (
    <div className={`${css.div} ${css.pulsate} ${wrapperClass10}`} style={style}>
      <LoadingSpinner />
    </div>
  );
}
