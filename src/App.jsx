import About from "./segments/About"
import Achievement from "./segments/Achievement"
import Hero from "./segments/Hero"
import Navbar from "./segments/Navbar"
import Portfolio from "./segments/Portfolio"
import Services from "./segments/Services"
import "swiper/css"
import Testimonials from "./segments/Testimonials"
import Contact from "./segments/Contact"
import Blog from "./segments/Blog"
import Footer from "./segments/Footer"

const App = () => {
  return (
    <div>
      <Navbar  />
      <Hero/>
      <Achievement/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials />
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App