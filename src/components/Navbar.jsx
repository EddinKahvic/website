import './Navbar.css'
import logo from '../assets/riot-games-logo.svg'
import arrow from '../assets/triangle-down.svg'

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-left-content">
        <div className="Navbar-left-content-icons">
          <div className="Navbar-left-content-logo">
            <img src={logo} alt="Riot games logo" width="75px" height="24px" />
          </div>
          <div className="Navbar-left-content-arrow">
            <img src={arrow} alt="Arrow" width="20px" height="8px" />
          </div>
        </div>
      </div>
      <div className="Navbar-center-content"></div>
      <div className="Navbar-right-content"></div>
    </div>
  )
}

export default Navbar
