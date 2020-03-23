import './style/main.sass'
import {PORTFOLIO} from '../../var/URL'
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
            titleSectionHref={PORTFOLIO.INDEX}
            titleImgSrc="/public/assets/img/dummy-portfolio-ratio-2-1.png"
            titleHeader="Material Design guidelines"
            titleDescription="Material Design principles, styles, and best practices"
          />
            <TitleSection 
            titleSectionHref="/about"
            titleImgSrc="/public/assets/img/dummy-portfolio-ratio-2-1.png"
            titleHeader="Material Design guidelines"
            titleDescription="Material Design principles, styles, and best practices"
          />
           <TitleSection 
            titleSectionHref="/about"
            titleImgSrc="/public/assets/img/dummy-portfolio-ratio-2-1.png"
            titleHeader="Material Design guidelines"
            titleDescription="Material Design principles, styles, and best practices"
          />
           <TitleSection 
            titleSectionHref="/about"
            titleImgSrc="/public/assets/img/dummy-portfolio-ratio-2-1.png"
            titleHeader="Material Design guidelines"
            titleDescription="Material Design principles, styles, and best practices"
          />
        </section>
      </div>
    </main>
  )
}