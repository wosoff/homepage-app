import './style/kbk-intro.sass';
import React, { useEffect } from 'react';
import appendDividingComment from '../../helpers/append-html-comment';

// kbk-homepage-hero at mio
export default function KbkHomeIntro() {
  useEffect(() => {
    appendDividingComment('.kbk-intro', 4);
  });

  return (
    <div
      // className="_nghost-stf-c6" // at mio
      className="kbk-intro"
    >
      <section
        // className="_ngcontent-dtm-c6" // at mio
        className="kbk-intro--section"
      >
        <div
          // className="mio-homepage-hero--container" // at mio
          className="kbk-intro--container"
        >
          <p>
            Material is a design system – backed by open-source code – that helps
            <br />
            teams build high-quality digital experiences.
          </p>
        </div>
      </section>
    </div>
  );
}
