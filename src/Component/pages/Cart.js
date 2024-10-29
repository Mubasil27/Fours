import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, increment, decrement, clearCart } from '../store/Cartslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure to include Toastify's CSS
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
    toast.error('Item removed from cart.');
  };

  const handleIncrement = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity < 3) {
      dispatch(increment(itemId));
      toast.info('Item quantity increased.');
    } else {
      toast.warning('You can only add a maximum of 3 items.');
    }
  };

  const handleDecrement = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      dispatch(decrement(itemId));
      toast.info('Item quantity decreased.');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty!');
    } else {
      toast.success('Thank you for your purchase!');
      dispatch(clearCart());
    }
  };

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container my-4" id='cart'>
      <div className='aaa'></div>
      <div className='aaa'></div>
      <div className='aaa'></div>
      <h2 className="text-center mb-4">Your Shopping Cart</h2>
      <div className="row">
        {cartItems.length === 0 ? (
          <div className="col-12 text-center">
            {/* Big Cart Icon */}
            <i className="bi bi-cart-fill" style={{ fontSize: '80px', color: '#e5533d' }}></i>
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => {
              const totalItemPrice = (item.price * item.quantity).toFixed(2);
              return (
                
                <div className="col-md-4" key={item.id}>
                  <div className="card mb-4 shadow-sm cart-card">
                  <Link to={`/items/${item.id}`}>
        <img src={item.img} className="card-img-top product-img" alt={item.name} />
      </Link>
                    {/* <img
                      src={item.img}
                      className="card-img-top img-fluid cart-image"
                      alt={item.name}
                    /> */}
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        Price: <strong>{item.price} Rs</strong>
                      </p>
                      <p className="card-text">
                        Total: <strong>{totalItemPrice} Rs</strong>
                      </p>

                      <div className="d-flex justify-content-between align-items-center my-2">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => handleDecrement(item.id)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => handleIncrement(item.id)}
                          disabled={item.quantity >= 3}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn btn-danger mt-2 w-100"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col-12 text-center mt-4">
              <h4>Total Price: {totalPrice} Rs</h4>
              <button
                className="btn btn-success mt-2 w-100"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
