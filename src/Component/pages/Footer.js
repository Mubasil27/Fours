import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container" id='Contact'>
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            At Four'S, we are dedicated to bringing you the finest culinary experiences,
            blending traditional recipes with modern flavors. Join us on this delightful journey!
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#review">Reviews</a></li>
            <li><a href="#contact">Contact Us</a></li>
            
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@four-s.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Four'S. All rights reserved.</p>
        <div className="socials">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
