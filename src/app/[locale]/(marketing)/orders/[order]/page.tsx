import Breadcrumbs from '@/shared/ui/breadcrumbs/BreadCrumbs';
import Page from '@/shared/containers/Page';
import css from './order.module.scss';
import { useLocale } from 'next-intl';

export default function ProductItem({ params }: { params: { order: string } }) {
  const locale = useLocale();
  const breadcrumb_data = [
    { link: '/', title: 'Главная' },
    { link: `/${locale}/orders`, title: 'Заказы' },
    { link: '', title: `${params.order}` },
  ];

  return (
    <Page>
      <div className={css.wrapper}>
        <Breadcrumbs data={breadcrumb_data} />
        <div>Это заказ: {params.order}</div>
      </div>
    </Page>
  );
}
