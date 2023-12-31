
// import './App.css'

import About from "./components/About/About"
import Blogs from "./components/Blogs/Blogs"
import Counter from "./components/Counter/Counter"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Plans from "./components/Plans/Plans"
import Questions from "./components/Questions/Questions"
import Service from "./components/Service/Service"
import Team from "./components/Team/Team"
import Testimonials from "./components/Testimonials/Testimonials"
import Watch from "./components/Watch/Watch"

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Counter/>
      <Team/>
      <Watch/>
      <Questions/>
      <Plans/>
      <Testimonials/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App
