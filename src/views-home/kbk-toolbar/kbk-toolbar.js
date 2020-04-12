import './style/kbk-toolbar.sass';
import React, { useState, useEffect } from 'react';
import Classnames from 'classnames';
import Brand from '../kbk-rand/brand';
import LanguageSelection from '../kbk-language-selection/language-selection';
import Nav from '../kbk-nav/nav';

export default function KbkToolbar() {
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(currentScrollPos);

  useEffect(() => {
    window.onscroll = function onscrollToScrollPos() {
      setPrevScrollPos(currentScrollPos);
      setCurrentScrollPos(window.pageYOffset);
    };
  });

  const classnames = Classnames({
    show: currentScrollPos === 0 || (currentScrollPos - prevScrollPos) < 0,
  });

  return (
    <>
      <header className={classnames}>
        <Brand />
        <Nav />
        <LanguageSelection />
      </header>
    </>
  );
}
