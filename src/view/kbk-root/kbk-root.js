import './style/kbk-root.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import PAGE_TITLE_DATA from '../../var/PAGE_TITLE_DATA';
import KbkToolbar from '../kbk_toolbar/kbk-toolbar';
import MainContent from '../main_content/main_content';
import KbkIntro from '../kbk-intro/kbk-intro';
import MainContainer from '../main-container/main-container';
import PageTitleGroup from '../page-title-group/page-title-group';

function KbkRoot() {
  return (
    <>
      <KbkToolbar />
      <MainContent>
        <KbkIntro />
        <MainContainer>
          <PageTitleGroup
            pageTitleData={PAGE_TITLE_DATA}
          />
          <></>
        </MainContainer>
      </MainContent>
    </>
  );
}

ReactDOM.render(
  <KbkRoot />,
  document.getElementById('kbk-root'),
);
