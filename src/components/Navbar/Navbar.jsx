import './Navbar.css'
import LeftContent from './NavbarLeft/LeftContent'
import CenterContent from './NavbarCenter/CenterContent'
import RightContent from './NavbarRight/RightContent'

function Navbar() {
  return (
    <nav className="Navbar">
      <LeftContent />
      <CenterContent />
      <RightContent />
    </nav>
  )
}

export default Navbar
