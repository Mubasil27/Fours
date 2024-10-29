import React from 'react';
import { useParams } from 'react-router-dom';
import { deta, Dataa } from '../Compo/Datadetails';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { remove, increment, decrement, add } from '../store/Cartslice';

const Singlepage = () => {
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

  let { id } = useParams();

  // Find the item in either `deta` or `Dataa`
  let item = deta.find((item) => item.id.toString() === id) || 
             Dataa.find((item) => item.id.toString() === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const itemQuantity = cartItem ? cartItem.quantity : 1;

  return (
    <div className="singlepage-container">
      <div className="singlepage-header">
        <h1>{item.name}</h1>
      </div>

      <div className="singlepage-content">
        <div className="singlepage-img">
          <img src={item.img} alt={item.name} />
        </div>

        <div className="singlepage-details">
          <h5>{item.desc}</h5>

          <div className="singlepage-price-time">
            <h5>Price: Rs. {item.price}</h5>
            <h5>Time: {item.time} Min</h5>
          </div>

          {cartItem && (
            <div className="quantity-control">
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleDecrement(item.id)}
                disabled={itemQuantity === 1}
              >
                -
              </button>
              <span className="quantity-display mx-3">{itemQuantity}</span>
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleIncrement(item.id)}
                disabled={itemQuantity >= 3}
              >
                +
              </button>
            </div>
          )}

          <button
            className={`btn mt-3 add-to-cart-btn ${cartItem ? 'btn-success' : 'btn-primary'}`}
            onClick={() => handleAdd(item)}
            disabled={!!cartItem}
          >
            {cartItem ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Singlepage;
