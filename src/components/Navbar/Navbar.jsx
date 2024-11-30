import './Navbar.css'
import LeftContent from './NavbarLeft/LeftContent'
import CenterContent from './NavbarCenter/CenterContent'

function Navbar() {
  return (
    <nav className="Navbar">
      <LeftContent />
      <CenterContent />

      <div className="Navbar-right-content"></div>
    </nav>
  )
}

export default Navbar
