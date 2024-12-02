import './LeftContent.css'
import logo from '../../../assets/riot-games-logo.svg'
import TriangleDown from '../../../icons/TriangleDown'

function LeftContent() {
  return (
    <div className="Navbar-left-content">
      <div className="Navbar-left-logo">
        <img src={logo} alt="Riot Games logo" width="84px" height="24px" />
      </div>
      <div className="Navbar-left-arrow">
        <TriangleDown />
      </div>
    </div>
  )
}

export default LeftContent
