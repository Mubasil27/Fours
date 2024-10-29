// import React from 'react'

// const About = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default About
import React from "react";


const About = () => {
  return (
    <div className="about-section" id="about">
      <h1 className="about-title">About Us</h1>
      <div className="about-grid">
        <div className="about-description">
          <p>
            Welcome to Four'S, where we believe in starting your day with the finest
            ingredients and flavors! Established in [Year], Four'S was born out of a
            passion for culinary excellence and a commitment to quality. Our mission is
            to bring the best of gourmet food to your table, combining traditional
            recipes with modern twists.
          </p>
          <p>
            At Four'S, we take pride in sourcing only the freshest ingredients, 
            ensuring that every dish we serve is crafted with care and attention. 
            Our team of talented chefs are dedicated to providing you with an 
            unforgettable dining experience, whether you're enjoying a meal at our 
            restaurant or ordering takeout.
          </p>
          <p>
            We value our customers and strive to create a welcoming atmosphere 
            for everyone. Your satisfaction is our top priority, and we are always 
            eager to hear your feedback to improve our services.
          </p>
        </div>
        <div className="about-team">
          <h2>Meet Our Team</h2>
          <p>
            Our team is comprised of passionate food enthusiasts, skilled chefs, 
            and dedicated staff who work together to make Four'S a culinary haven.
            We believe that great food is the result of teamwork, creativity, and
            a love for what we do.
          </p>
        </div>
        <div className="about-vision">
          <h2>Our Vision</h2>
          <p>
            Our vision at Four'S is to be a leader in the gourmet food industry,
            providing our customers with innovative dishes that delight the senses.
            We aim to foster a sense of community through food and create lasting
            memories with every meal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
