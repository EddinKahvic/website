import React from 'react'
import MagnifyingGlass from '../../../icons/MagnifyingGlass'
import './RightContent.css'

function RightContent() {
  return (
    <div className="Navbar-right-content">
      <div className="Navbar-right-search">
        <form action="/">
          <div className="Navbar-right-search-input-container">
            <div className="Navbar-right-search-icon">
              <MagnifyingGlass />
              <input type="submit"></input>
              {/* <button type="reset">
                <X />
              </button> */}
            </div>
            <input type="text" defaultValue="" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default RightContent
