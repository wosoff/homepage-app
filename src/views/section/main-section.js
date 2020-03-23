import './style/main-section.sass'
import React from 'react'
import MioMultiUp from '../mio-multi-up/mio-multi-up'

export default function MainSection() {
  return (
    <>
      <section className="section section_main-container">
        <div className="main-container">
          <div className="main-container--header ng-star-inserted">
            <h2 className="ng-star-inserted">
              Design guidance and code
            </h2>
            <p  className="ng-star-inserted">
              Use our most popular design and development resources to jumpstart your latest project
            </p>
          </div>
          <MioMultiUp />
        </div>
      </section>
    </>
  )
}