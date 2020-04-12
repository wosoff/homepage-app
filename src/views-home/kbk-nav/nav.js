import './style/nav.sass';
import React, { useEffect, useRef, useState } from 'react';
import Classnames from 'classnames';

export default function Nav() {
  const navLinkRef = useRef(null);
  const [currentNav, setCurrentNav] = useState(null);
  const condition = 'About';

  useEffect(() => {
    // @ts-ignore
    setCurrentNav(navLinkRef.current.text);
  });

  const classnames = Classnames('nav-indicator', {
    // @ts-ignore
    'nav-indicator--active': condition === currentNav,
  });

  return (
    <>
      <nav className="nav" role="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/about"
              aria-label="Design"
              // target="_self"
              ref={navLinkRef}
            >
              About
              <span className={classnames} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio" aria-label="Design" target="_self">
              Portfolio
              <span className="nav-indicator" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/tech" aria-label="Design" target="_self">
              Tech
              <span className="nav-indicator" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact" aria-label="Design" target="_self">
              Contact
              <span className="nav-indicator" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
