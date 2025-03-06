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
        <p>
       <h3>Hours of Operation:</h3> 
        <p><strong>Tuesday through Friday</strong></p>
        <p>10 AM to 5 PM</p>
         <p><strong>Saturday & Sundays</strong></p>
        <p>12 PM to 6 PM</p>
        <h3>CLOSED on Monday</h3>
        <br />
        Adress:
        2456 South Avenue, Chicago, IL 86325
        <br/>
        Contact us
        <br/>
        zoo.info@chicagoZoo.com
        </p>
      </div>
    </div>
  </>
);
};

export default About;