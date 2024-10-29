
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import image from '../Image/spaghetti-1932466.jpg';


const Home = () => {
  return (
    <div>
      {/* Home Start */}
      <div className='hero-section'>
        <img className='hero-image' src={image} alt="Delicious Spaghetti" />
        <div className='hero-overlay'>
          <div className='aaa'></div>
          <h1 className="hero-title animate__animated animate__fadeInLeft">
            Start Your Day with <span className="highlight">Four'S</span>
          </h1>
          <Link className='btn animate__animated animate__fadeInUp' to="/All"> {/* Updated to Link */}
            Get Yours Now
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className='features'>
        <div className='feature-item'>
          <i className="bi bi-truck feature-icon"></i>
          <h4>Free Shipping</h4>
          <p>On orders over $100</p>
        </div>
        <div className='feature-item'>
          <i className="bi bi-clock feature-icon"></i>
          <h4>Express Delivery</h4>
          <p>Available for Metro Areas*</p>
        </div>
        <div className='feature-item'>
          <i className="bi bi-shop-window feature-icon"></i>
          <h4>Pickup from Store</h4>
          <p>For Your Comfort</p>
        </div>
        <div className='feature-item'>
          <i className="bi bi-lock feature-icon"></i>
          <h4>Secured Shopping</h4>
          <p>Your Safety is Our Priority</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
