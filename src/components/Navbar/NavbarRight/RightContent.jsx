import React, { useState } from 'react'
import MagnifyingGlass from '../../../icons/MagnifyingGlass'
import './RightContent.css'

function RightContent() {
  return (
    <div className="Navbar-right-content">
      <div className="Navbar-right-search">
        <form action="/">
          <div className="Navbar-right-search-input-container">
            <input type="text" />
            <div className="Navbar-right-search-icon">
              <button type="submit" aria-hidden="true">
                <MagnifyingGlass />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RightContent
