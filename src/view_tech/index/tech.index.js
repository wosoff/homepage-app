import './style/tech.main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import KbkToolbar from '../../view/kbk_toolbar/kbk-toolbar';
import Main from '../main/main';

function Root() {
  return (
    <div className="about-root">
      <KbkToolbar />
      <Main />
    </div>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('kbk-root'),
);
