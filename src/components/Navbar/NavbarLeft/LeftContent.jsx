import './LeftContent.css'
import logo from '../../../assets/riot-games-logo.svg'
import triangle from '../../../assets/triangle-down.svg'

function LeftContent() {
  return (
    <div className="Navbar-left-content">
      <div className="Navbar-left-logo">
        <img src={logo} alt="Riot Games logo" width="75px" height="24px" />
      </div>
      <div className="Navbar-left-arrow">
        <img src={triangle} alt="Arrow" width="20px" height="8px" />
      </div>
    </div>
  )
}

export default LeftContent
