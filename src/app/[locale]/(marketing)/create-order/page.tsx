import React from 'react';
import Page from '@/shared/containers/Page';
import NavBar from './_components/NavBar/NavBar';
import InfoBlock from './_components/InfoBlock/InfoBlock';
import ProjectInfo from './forms/project-info';
import css from './createOrder.module.scss';
export default function CreateOrder(): JSX.Element {
  return (
    <Page>
      <div className={css.wrapper}>
        <NavBar />
        <main>
          <InfoBlock />
          <ProjectInfo />
        </main>
      </div>
    </Page>
  );
}
