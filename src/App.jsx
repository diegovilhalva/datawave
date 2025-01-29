import About from "./segments/About"
import Achievement from "./segments/Achievement"
import Hero from "./segments/Hero"
import Navbar from "./segments/Navbar"


const App = () => {
  return (
    <div>
      <Navbar  />
      <Hero/>
      <Achievement/>
      <About/>
    </div>
  )
}

export default App