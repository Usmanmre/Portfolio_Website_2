import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import About from "./components/About";
import WholeProject from "./components/WholeProject";
import bgImage from './Images/bg2.jpg'; // Adjust path as needed

function App() {
  return (
    
    
    <Router>
          <Navbar />

      <div className="App font-oswald bg-black">
    
        {/* Rest of the components */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
          <HeroSection />

                <Gallery />
                <Stats />
                <Testimonials />
                <Services />
                <ContactUs />
                <Footer />
              </div>
            }
          />
          <Route path="/projectDetail/:name" element={<WholeProject />} />
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
