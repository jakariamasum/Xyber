
// import './App.css'

import Blogs from "./components/Blogs/Blogs"
import Counter from "./components/Counter/Counter"
import Footer from "./components/Footer/Footer"
import Plans from "./components/Plans/Plans"
import Questions from "./components/Questions/Questions"
import Team from "./components/Team/Team"
import Testimonials from "./components/Testimonials/Testimonials"
import Watch from "./components/Watch/Watch"

function App() {

  return (
    <div>
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
