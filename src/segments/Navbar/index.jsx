import DataWaveLogo from "../../components/DataWaveLogo"
import "./Navbar.css"
import { navRoutes } from "../../data"
import { Link } from "react-scroll"
import Socials from "../../components/Socials"
import { CgMenuRight } from "react-icons/cg"
import Sidebar from "../../components/Sidebar"
import { useEffect, useMemo, useState } from "react"
import { convertHexToRGBA } from "../../util"
import gsap from "gsap"
const Navbar = () => {
  const [open,setOpen] = useState(false)
  const [drop,setDrop] = useState(false)

  const dropNavbar = () => {
    if (window.scrollY > 100) {
      setDrop(true)
    }else{
      setDrop(false)
    }
  }

  useMemo(() => {
    window.addEventListener("scroll",dropNavbar)
    return () => window.removeEventListener("scroll",dropNavbar)
  })

  useEffect(() => {
    gsap.timeline({delay:0.5})
    .fromTo("#navbar .logo",{x:-50,opacity:0},{x:0,opacity:1})
    .fromTo("#navbar .socials",{x:-50,opacity:0},{x:0,opacity:1})
    .fromTo("#navbar .route-wrapper .route",{x:-50,opacity:0},{x:0,opacity:1,stagger:0.2})
  },[])

  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(!open)} />
        {open  && (
          <div className="sidebar-overlay" onClick={() => setOpen(!open)} style={{background:convertHexToRGBA('--bg-base',0.8)}} />
        )}
      <nav id="navbar" className={drop ? "blur drop":""}>
        <DataWaveLogo />
        <div className="route-wrapper">
          {navRoutes.map((route, i) => (
            <Link key={i} to={route.id} className="route" activeClass="active" smoothtrue spy={true}
              offset={-50}>{route.name}</Link>
          ))}
        </div>
        <Socials />
        <div className="menu" onClick={() => setOpen(!open)}>
          <CgMenuRight />
        </div>
      </nav>
    </>
  )
}

export default Navbar