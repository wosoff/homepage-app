import './style/home.main.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import KbkToolbar from '../kbk-toolbar/kbk-toolbar'
import MainContent from '../main-content/main-content'
import KbkHomepageHero from '../kbk-home-intro/kbk-home-intro'

function HomeRoot() {
  return (
    <div className="home-root">
      <KbkToolbar />
      <MainContent 
        homeIntroFactory={() => KbkHomepageHero}
      />
    </div>
  )
}

ReactDOM.render(
  <HomeRoot />,
  document.getElementById('kbk-root')
);