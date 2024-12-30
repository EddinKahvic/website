import React, { useState } from 'react'
import MagnifyingGlass from '../../../icons/MagnifyingGlass'
import './RightContent.css'

function RightContent() {
  const [isExpanded, setIsExpanded] = useState(false)

  //Toggles state values based on previous state
  const toggleExpand = () => {
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
            <div className="Navbar-right-search-icon">
              <button
                type="button"
                className="Navbar-right-search-button"
                onClick={() => {
                  toggleExpand()
                }}
              >
                <MagnifyingGlass />
              </button>

              {/* <button type="reset">
                <X />
              </button> */}
            </div>
            <input
              type="text"
              defaultValue=""
              style={{
                width: isExpanded ? '100%' : '0%',
                transition: 'width 1s ease-out',
              }}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default RightContent
