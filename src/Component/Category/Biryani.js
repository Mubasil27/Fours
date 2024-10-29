

import React from "react";

import { add } from '../store/Cartslice';
import { useSelector, useDispatch } from 'react-redux';
import {Dataa, deta} from '../Compo/Datadetails';
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
          <Link to={`/items/${item.id}`} style={{color:'black'}}>{item.name}</Link>
        </h4>
       
        <h4 className="card-title">{item.id}</h4>
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


const Burger = () => {
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

  
  const BiryaniItems = deta.filter(item => item.category === 'Biryani');
  return (
    <div id="Product" className="product-container">
  <div className="center">
    <h1><span>Biryani Products</span></h1>
  </div>
  <div className="ccc"></div>
  <div className="product-grid">
    {BiryaniItems.map((item) => {
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
  </div>
  <ToastContainer />
</div>

  );
};

export default Burger;
