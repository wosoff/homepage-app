import './style/main.sass'
import React from 'react'
import TitleSection from '../title-section/title-section'

export default function AboutMain() {
  return (
    <main className="main" role="main">
      <div className="main-container">
        <div className="main-header">
          <h2>Portfolio, in this here.</h2>
          <p>In this here, portfolio page and Watch Contents!</p>
        </div>
        <section className="main-section">
          <TitleSection 
            titleSectionHref="/about"
            titleImgSrc="/public/assets/img/dummy-tech-ratio-2-1.png"
            titleHeader="Material Design guidelines"
            titleDescription="Material Design principles, styles, and best practices"
          />
            <TitleSection 
            titleSectionHref="/about"
            titleImgSrc="/public/assets/img/dummy-tech-ratio-2-1.png"
            titleHeader="Material Design guidelines"
            titleDescription="Material Design principles, styles, and best practices"
          />
           <TitleSection 
            titleSectionHref="/about"
            titleImgSrc="/public/assets/img/dummy-tech-ratio-2-1.png"
            titleHeader="Material Design guidelines"
            titleDescription="Material Design principles, styles, and best practices"
          />
           <TitleSection 
            titleSectionHref="/about"
            titleImgSrc="/public/assets/img/dummy-tech-ratio-2-1.png"
            titleHeader="Material Design guidelines"
            titleDescription="Material Design principles, styles, and best practices"
          />
        </section>
      </div>
    </main>
  )
}