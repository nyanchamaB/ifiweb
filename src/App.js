import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Contact from './components/contact';
import About from './components/about';
import Team from './components/Team';
import { Header } from './components/header';
import Programs from './components/programs';
import Testimonials from './components/testimonials';
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
     <div>
     <Navigation/>
     <Header data={landingPageData.Header} />
     <About data={landingPageData.About} />
     <Programs data={landingPageData.Programs} />
     <Testimonials data={landingPageData.Testimonials} />
     <Team data={landingPageData.Team} />
     <Contact data={landingPageData.Contact} />
     </div>
     );
}

export default App;

