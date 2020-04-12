import './style/main-title-section.sass';
import React from 'react';
import {
  ABOUT, CONTACT, PORTFOLIO, TECH,
} from '../../var/URL';
import TitleSection from '../title-section/title-section';

export default function MainTitleSection() {
  return (
    // <div className="mio-multi-up_ngcontent-dtm-c5"> // at mio
    <div className="main-title-section">

      {/* <div className="mio-multi-up">  // at mio */}
      <div className="main-title-section-container">
        <TitleSection
          titleSectionHref={ABOUT.INDEX}
          titleImgSrc="/public/assets/img/dummy-about-ratio-2-1.png"
          titleHeader="Material Design guidelines"
          titleDescription="Material Design principles, styles, and best practices"
        />
        <TitleSection
          titleSectionHref={PORTFOLIO.INDEX}
          titleImgSrc="/public/assets/img/dummy-portfolio-ratio-2-1.png"
          titleHeader="Material Design guidelines"
          titleDescription="Material Design principles, styles, and best practices"
        />
        <TitleSection
          titleSectionHref={TECH.INDEX}
          titleImgSrc="/public/assets/img/dummy-tech-ratio-2-1.png"
          titleHeader="Material Design guidelines"
          titleDescription="Material Design principles, styles, and best practices"
        />
        <TitleSection
          titleSectionHref={CONTACT.INDEX}
          titleImgSrc="/public/assets/img/dummy-ratio-2-1.png"
          titleHeader="Material Design guidelines"
          titleDescription="Material Design principles, styles, and best practices"
        />
      </div>
    </div>
  );
}
