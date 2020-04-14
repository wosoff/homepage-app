import './style/main-container.sass';
import React from 'react';
import MainContainerHeader from '../main-container--header/main-container--header';
import PageTitleGroup from '../page-title-group/page-title-group';

export default function MainContainer() {
  return (
    <>
      <section>
        <div className="main-container">
          <MainContainerHeader />
          <PageTitleGroup />
        </div>
      </section>
    </>
  );
}
