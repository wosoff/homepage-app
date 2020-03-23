import './style/main-section.sass'
import React from 'react'
import MainTitleSection from '../main-title-sectoin/main-title-section'

function MainContainerHeader() {
  return (
    
    <div className="main-container--header">
{/* <div className="main-container--header ng-star-inserted"> // at mio */}
      <h2>
        Design guidance and code
      </h2>
      <p>
        Use our most popular design and development resources to jumpstart your latest project
      </p>
    </div>
  )
}

export default function MainSection() {
  return (
    <>
      <section className="section main-section">
        <div className="main-container">
          <MainContainerHeader />
          <MainTitleSection />
        </div>
      </section>
    </>
  )
}