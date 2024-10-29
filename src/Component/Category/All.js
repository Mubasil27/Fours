import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../store/Cartslice';
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deta } from '../Compo/Datadetails';

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

const All = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [sold, setSold] = useState(deta); // Original product list
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || ""; // Get search query from URL

  useEffect(() => {
    if (searchQuery) {
      const filteredItems = deta.filter(
        (demoss) =>
          demoss.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          demoss.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSold(filteredItems);
    } else {
      setSold(deta); // Reset to original list if no search query
    }
  }, [searchQuery]); // Run this effect whenever searchQuery changes

  const handleAdd = (item) => {
    const isAlreadyInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    
    if (!isAlreadyInCart) {
      dispatch(add(item));
      toast.success("Item successfully added to cart!");
    } else {
      toast.error("This item is already in your cart.");
    }
  };

  return (
    <div id="Product" className="product-container">
      <div className="center">
        <h1><span>Special Products</span></h1>
      </div>
      
      {/* Show search results message */}
      {searchQuery && (
        <p>Showing results for "{searchQuery}"</p>
      )}

      {/* Conditionally render the "Product not found" message */}
      {sold.length === 0 ? (
        <p className="no-results-message">Product not found</p>
      ) : (
        <div className="product-grid">
          {sold.map((item) => {
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
      )}
      <ToastContainer />
    </div>
  );
};

export default All;
