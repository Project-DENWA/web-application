import css from './order.module.scss';

import { Task } from '@/app/[locale]/(marketing)/orders/_components/TasksContent/ITask';
import { useLocale } from 'next-intl';
import { cn } from '@/shared/lib/utils';

import SectionHeader from '@/shared/ui/sectionHeader/SectionHeader';
import Page from '@/shared/containers/Page';
import UserInfo from './_components/UserInfo/UserInfo';
import Requirement from './_components/UserInfo/Requirement/Requirement';
import RelatedTasks from './_components/RelatedTasks/RelatedTasks';

const getPosts = async (name: string): Promise<Task[]> => {
  const data = await fetch(`http://79.174.80.17:5000/works/${name}`);
  const posts = await data.json();

  return posts;
};

export default async function OrderItem({
  params,
}: {
  params: { order: string };
}) {
  const posts = await getPosts(params.order);
  console.log(posts);
  const locale = useLocale();
  const breadcrumb_data = [
    { link: '/', title: 'Главная' },
    { link: `/${locale}/orders`, title: 'Заказы' },
    { link: '', title: 'Подробное описание заказа' },
  ];

  return (
    <Page>
      <div className={css.wrapper}>
        <div className={css.title}>
          <SectionHeader
            title="Разработка сайта на Tilda"
            breadcrumbs={breadcrumb_data}
          />
        </div>
        <div className={css.main}>
          <UserInfo />
          <div className={cn(css.separator, 'bg-light-text-main-50')}></div>
          <Requirement />
          <div className={cn(css.separator, 'bg-light-text-main-50')}></div>
          <RelatedTasks />
        </div>
      </div>
    </Page>
  );
}
