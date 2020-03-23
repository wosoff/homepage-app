import './style/mio-title.sass'
import React from 'react'

export default function MioTitle() {
  return (
    <div className="mio-title">
      <div className="mio-link">
        <a 
          className="_ngcontent-fgq-c4"
          href="/about"
          aria-label="Information For Homepage Producer"
          target="_blank"
        >
     
        <div className="poster">
          {/* <div className="poster_child">test</div> */}
          <img 
            className="image"
            src="/public/assets/img/dummy-ratio-2-1.png"
          />
          <h4 className="header_ngcontent-fgq-c10 ng-tns-c10-0 ng-star-inserted">
            <span className="link">Material Design guidelines </span>
          </h4>
          <p  className="_ngcontent-fgq-c10 ng-tns-c10-0 ng-star-inserted">
            Material Design principles, styles, and best practices
          </p>
        </div>
      </a>
    </div>
  </div>
  )
}