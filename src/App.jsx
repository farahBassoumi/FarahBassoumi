import { BrowserRouter } from "react-router-dom";
import "./App.css";
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";

import {
  Navbar,
  Hero,
  About,
  Tech,
  Contact,
  Experience,
  Feedbacks,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div></div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="h-[40px]"></div>

        <Experience />
        <div className="h-[40px]"></div>

        <Works />
        {/* <Feedbacks /> */}
        <div className="h-[80px]"></div>
        <Tech />
        <div className="h-[50px]"></div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="h-[40px]"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
