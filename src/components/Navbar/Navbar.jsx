import './Navbar.css'
import logo1 from '../../assets/riot-games-logo.svg'
import arrow from '../../assets/triangle-down.svg'
import logo2 from '../../assets/league-of-legends-logo-L.svg'

function Navbar() {
  const items = [
    'Game',
    'Champions',
    'News',
    'Patch Notes',
    'Discover',
    'Esports',
    'Universe',
    'Merch',
    'Support',
  ]

  return (
    <nav className="Navbar">
      <div className="Navbar-left">
        <div className="Navbar-left-content">
          <div className="Navbar-left-logo">
            <img src={logo1} alt="Riot games logo" width="75px" height="24px" />
          </div>
          <div className="Navbar-left-arrow">
            <img src={arrow} alt="Arrow" width="20px" height="8px" />
          </div>
        </div>
      </div>
      <div className="Navbar-center">
        <div className="Navbar-center-content">
          <div className="Navbar-center-logo">
            <img src={logo2} alt="League of Legends logo" width="27px" />
          </div>
          <div className="Navbar-center-items">
            {items.map((item) => (
              <button key={item}>{item}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="Navbar-right-content"></div>
    </nav>
  )
}

export default Navbar
