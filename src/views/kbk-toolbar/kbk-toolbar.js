import './style/kbk-toolbar.sass'
import React, {useState, useEffect} from 'react'
import Classnames from 'classnames'
import Brand from '../brand/brand'
import LanguageSelection from '../language-selection/language-selection'
import Nav from '../nav/nav'

export default function KbkToolbar() {
  const [currentScrollPos, setCurrentScrollPos] = useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(currentScrollPos)

  let classnames
  useEffect(() => {
    window.onscroll = function() {
      setPrevScrollPos(currentScrollPos)
      setCurrentScrollPos(window.pageYOffset)
    }
  })

  classnames = Classnames({
    'show': currentScrollPos === 0 || (currentScrollPos - prevScrollPos ) < 0
  })

  return (
    <>
      <header className={classnames}>
        <Brand />
        <Nav />
        <LanguageSelection />
      </header>
    </>
  )
}