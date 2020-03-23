import './style/home-root.sass'
import React from 'react'
import KbkToolbar from '../kbk-toolbar/kbk-toolbar'
import Main from '../main/main'

export default function HomeRoot() {
  return (
    <div className="kbk-root">
      <KbkToolbar />
      <Main />
    </div>
  )
}