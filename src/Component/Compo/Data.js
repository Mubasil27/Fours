import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { add } from '../store/Cartslice';
import { useSelector, useDispatch } from 'react-redux';
import { Dataa } from '../Compo/Datadetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const ProductCard = ({ item, isAlreadyInCart, onAdd }) => (
  <div className="item" key={item.id}>
    <div className="card product-card">
      <Link to={`/items/${item.id}`}>
        <img src={item.img} className="card-img-top product-img" alt={item.name} />
      </Link>

      <div className="card-body">
        <h4 className="card-title">
          <Link to={`/items/${item.id}`} style={{ color: 'black' }}>{item.name}</Link>
        </h4>
        <div className="price-time d-flex justify-content-between">
          <h5>Rs. {item.price}</h5>
          <div>{item.time} Min</div>
        </div>
        <button
          className={`btn mt-3 add-to-cart-btn ${isAlreadyInCart ? 'btn-success' : 'btn-primary'}`}
          onClick={onAdd}
          disabled={isAlreadyInCart}
        >
          {isAlreadyInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  </div>
);

const Data = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    const isAlreadyInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    
    if (!isAlreadyInCart) {
      dispatch(add(item));
      toast.success("Item successfully added to cart!");
    } else {
      toast.error("This item is already in your cart.");
    }
  };

  const carouselOptions = {
    loop: true, // Enable looping
    autoplay: true, // Enable autoplay for automatic rotation
    autoplayTimeout: 4000,
    autoplayHoverPause: true, // Pause on hover
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: { items: 1 },      // Show 1 item on very small screens (mobile)
      600: { items: 1 },    // Show 1 item on small devices (larger mobile screens)
      768: { items: 2 },    // Show 2 items on tablets
      1000: { items: 3 },   // Show 3 items on desktop
      1200: { items: 4 },   // Show 4 items on larger desktops
    },
    dots: false,  // Enable dots for easier navigation on mobile
    nav: false,  // Disable navigation arrows for a cleaner look
  };

  return (
    <div id="Product" className="product-container">
      <div className="center">
        <h1><span>Special Products</span></h1>
      </div>
      {/* Use cartItems.length as a key for the carousel to avoid re-rendering */}
      <OwlCarousel className="owl-theme" key={cartItems.length} {...carouselOptions}>
        {Dataa.map((item) => {
          const isAlreadyInCart = cartItems.some((cartItem) => cartItem.id === item.id);
          return (
            <ProductCard 
              key={item.id}
              item={item}
              isAlreadyInCart={isAlreadyInCart}
              onAdd={() => handleAdd(item)}
            />
          );
        })}
      </OwlCarousel>
      <ToastContainer />
    </div>
  );
};

export default Data;
