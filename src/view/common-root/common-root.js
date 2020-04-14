import './style/common-root.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import MAIN_MENU_PAGE_INTRO_DATA from '../../var/MAIN_MENU_PAGE_INTRO_DATA';
import MAIN_CONTENT_COLOR from '../../var/MAIN_CONTENT_COLOR';
import PAGE_TITLE_DATA from '../../var/PAGE_TITLE_DATA';
import getPathOfUrl from '../../helpers/get-path-of-url';
import KbkToolbar from '../kbk_toolbar/kbk-toolbar';
import MainContent from '../main_content/main_content';
import CommonIntro from '../commom-intro/common-intro';
import MainContainer from '../main-container/main-container';
import PageTitleGroup from '../page-title-group/page-title-group';

function CommonRoot() {
  const pathOfUrl = getPathOfUrl(window.location.href);

  // @ts-ignore
  const { TITLE, DESCRIPTION } = MAIN_MENU_PAGE_INTRO_DATA[pathOfUrl];
  // @ts-ignore
  const { BACKGROUND_COLOR, COLOR } = MAIN_CONTENT_COLOR[pathOfUrl];
  return (
    <>
      <KbkToolbar />
      <MainContent
        cssPrps={{ backgroundColor: BACKGROUND_COLOR, color: COLOR }}
      >
        <CommonIntro
          introTitle={TITLE}
          introDescripton={DESCRIPTION}
        />
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
  <CommonRoot />,
  document.getElementById('common-root'),
);
