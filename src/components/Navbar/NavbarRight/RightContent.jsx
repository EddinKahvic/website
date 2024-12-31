import React, { useState } from 'react'
import MagnifyingGlass from '../../../icons/MagnifyingGlass'
import X from '../../../icons/X'
import Globe from '../../../icons/Globe'
import TriangleDown from '../../../icons/TriangleDown'
import './RightContent.css'

function RightContent() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [text, setText] = useState('')

  const toggleExpanded = () => {
    //Toggles state values based on previous state
    setIsExpanded((previous) => !previous)
  }

  return (
    <div className="Navbar-right-content">
      <div className="Navbar-right-search">
        <form action="/">
          <div
            className="Navbar-right-search-input-container"
            style={{
              width: isExpanded ? '254px' : '28px',
              transition: 'width 1s ease-out',
            }}
          >
            <button
              type="button"
              className="Navbar-right-search-button"
              onClick={() => {
                toggleExpanded()
              }}
            >
              <MagnifyingGlass />
            </button>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                width: isExpanded ? '100%' : '0%',
                transition: 'width 1s ease-out',
              }}
            />

            <button
              type="reset"
              className="Navbar-right-x-button"
              onClick={() => {
                //If there is input text delete it, else toggleExpanded
                text.trim() !== '' ? setText('') : toggleExpanded()
              }}
              style={{
                opacity: isExpanded ? 0.5 : 0,
                transition: 'opacity 1s ease',
                visibility: isExpanded ? 'visible' : 'hidden',
              }}
            >
              <X />
            </button>
          </div>
        </form>
      </div>
      <div className="Navbar-right-globe">
        <div className="Navbar-right-globe-icon">
          <Globe />
        </div>
      </div>
      <div className="Navbar-right-account">
        <div className="Navbar-right-username-container">
          <p>Username</p>
          <TriangleDown></TriangleDown>
        </div>
      </div>
    </div>
  )
}

export default RightContent
