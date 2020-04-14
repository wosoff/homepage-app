import './style/kbk-root.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import KbkToolbar from '../kbk_toolbar/kbk-toolbar';
import initMainContent from '../main_content/main_content';
import KbkIntro from '../kbk-intro/kbk-intro';
import MainContainer from '../main-container/main-container';


const MainContent = initMainContent(
  KbkIntro,
  MainContainer,
);

function KbkRoot() {
  return (
    <>
      <KbkToolbar />
      <MainContent />
    </>
  );
}

ReactDOM.render(
  <KbkRoot />,
  document.getElementById('kbk-root'),
);
