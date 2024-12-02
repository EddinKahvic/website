import './CenterContent.css'
import logo from '../../../assets/league-of-legends-logo-L.svg'
import ArrowUpRight from '../../../icons/ArrowUpRight'
import TriangleDown from '../../../icons/TriangleDown'

function CenterContent() {
  const items = [
    { name: 'game', isDropdown: false, isLink: false },
    { name: 'champions', isDropdown: false, isLink: false },
    { name: 'news', isDropdown: true, isLink: false },
    { name: 'patch notes', isDropdown: false, isLink: false },
    { name: 'discover', isDropdown: true, isLink: false },
    { name: 'esports', isDropdown: false, isLink: true },
    { name: 'universe', isDropdown: false, isLink: true },
    { name: 'merch', isDropdown: false, isLink: true },
    { name: 'support', isDropdown: false, isLink: true },
  ]
  return (
    <div className="Navbar-center-content">
      <div className="Navbar-center-logo">
        <img
          src={logo}
          alt="League of Legends logo"
          width="24px"
          height="26px"
        />
      </div>
      <div className="Navbar-center-items">
        {items.map((item) => (
          <div className="Navbar-center-item" key={item.name}>
            <a href={item.name}>
              <p>
                {item.name}
                {item.isLink && <ArrowUpRight />}
                {item.isDropdown && <TriangleDown />}
              </p>
              <div className="Navbar-center-item-underline"></div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CenterContent
