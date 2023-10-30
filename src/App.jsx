
// import './App.css'

import Blogs from "./components/Blogs/Blogs"
import Footer from "./components/Footer/Footer"
import Plans from "./components/Plans/Plans"
import Questions from "./components/Questions/Questions"
import Testimonials from "./components/Testimonials/Testimonials"
import Watch from "./components/Watch/Watch"

function App() {

  return (
    <div>
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
