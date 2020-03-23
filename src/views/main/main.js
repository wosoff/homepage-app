import './style/main.sass'
import React from 'react'
import KbkHomepageHero from '../kbk-homepage-hero/kbk-homepage-hero'
import MainSection from '../section/main-section'

export default function Main() {
  return (
    <>
      <main 
        aria-label="Main Content" 
        className="main"
        id="main-content" 
        role="main"
      >
        <KbkHomepageHero />
        <MainSection />
      </main>
    </>
  )
}

