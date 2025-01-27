import DataWaveLogo from "../../components/DataWaveLogo"
import "./Navbar.css"
import { navRoutes } from "../../data"
import { Link } from "react-scroll"
import Socials from "../../components/Socials"
import { CgMenuRight } from "react-icons/cg"
import Sidebar from "../../components/Sidebar"
const Navbar = () => {
  return (
    <>
      <Sidebar />
      <nav id="navbar">
        <DataWaveLogo />
        <div className="route-wrapper">
          {navRoutes.map((route, i) => (
            <Link key={i} to={route.id} className="route" activeClass="active" smoothtrue spy={true}
              offset={-50}>{route.name}</Link>
          ))}
        </div>
        <Socials />
        <div className="menu">
          <CgMenuRight />
        </div>
      </nav>
    </>
  )
}

export default Navbar