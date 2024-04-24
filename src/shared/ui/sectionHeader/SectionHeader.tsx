import css from './sectionHeader.module.scss';

import Breadcrumbs from '../breadcrumbs/BreadCrumbs';
interface Breadcrumbs {
  title: string;
  link: string;
}

type Props = {
  title: string;
  breadcrumbs?: Breadcrumbs[];
  children?: React.ReactNode;
};

export default function SectionHeader({
  breadcrumbs = [],
  title,
  children,
}: Props): React.ReactElement {
  return (
    <div className={css.wrapper}>
      <h1>{title}</h1>
      <Breadcrumbs data={breadcrumbs} />
      {children}
    </div>
  );
}
