import React from "react";
import Header from "../Components/Header";

import '../css/About.css';

const About = () => {
  return (
    <>
    <Header />
    <div className="about-container">
      <div className="text-overlay">
        <h1>About Our Zoo</h1>
        <p>
          Welcome to our zoo! Our mission is to provide a sanctuary for exotic and endangered species while educating visitors about wildlife conservation. We house animals from diverse ecosystems across the world, offering an interactive and educational experience for visitors of all ages.
        </p>
        <p>
          Visit our various sections like The Safari Adventure, The Polar Frontier, The Tropical Rainforest, The Butterfly Garden, The Ocean Odyssey, and The Bird Sanctuary. Each section is home to unique species, and we are committed to providing them with a safe and enriching environment.
        </p>
      </div>
    </div>
  </>
);
};

export default About;