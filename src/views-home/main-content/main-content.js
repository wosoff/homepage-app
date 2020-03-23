import './style/main-content.sass'
import React from 'react'
import MainSection from '../main-section/main-section'

/**
 * @param {{ homeIntroFactory?: Function; }} props
 */
export default function MainContent(props) {
  const {homeIntroFactory} = props

  const HomeIntro = typeof homeIntroFactory === 'function'
    ? homeIntroFactory()
    : null

  return (
    <>
      <main 
        aria-label="Main Content" 
        className="main-content"
        id="main-content" 
        role="main"
      >
        {HomeIntro !== null ? <HomeIntro /> : ''}
        <MainSection />
      </main>
    </>
  )
}

