import About from "./segments/About"
import Achievement from "./segments/Achievement"
import Hero from "./segments/Hero"
import Navbar from "./segments/Navbar"
import Portfolio from "./segments/Portfolio"
import Services from "./segments/Services"
import "swiper/css"

const App = () => {
  return (
    <div>
      <Navbar  />
      <Hero/>
      <Achievement/>
      <About/>
      <Services/>
      <Portfolio/>
    </div>
  )
}

export default App