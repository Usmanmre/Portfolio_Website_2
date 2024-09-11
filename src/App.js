import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
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
      <div className="App bg-black">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div
              style=
              {{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center', // Ensure image is centered
                backgroundRepeat: 'no-repeat', // Prevent tiling
                position: 'relative', // Position relative for child elements
                width: '100%',
                minHeight: '100vh', // Ensure it covers the viewport height
                opacity: 0.8, // Set desired opacity value
              }}
              >
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
