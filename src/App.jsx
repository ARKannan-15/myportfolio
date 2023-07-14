import { BrowserRouter } from "react-router-dom";

import {About,Contact,Experience,Feedbacks,
Hero,Navbar,Tech,Works,StarsCanvas } from "./components";

const App = () => {
  return(
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        <h2 className="text-[#dfd9ff] font-medium lg:text-[26px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center
        "> &copy; Kannan A.R website</h2>
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App