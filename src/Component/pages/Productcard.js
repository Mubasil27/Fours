import { Link } from 'react-router-dom';

const Productcard = ({ item, isAlreadyInCart, onAdd }) => (
  <div className="item" key={item.id}>
    <div className="card product-card">
      <Link to={`/items/${item.id}`}>
        <img src={item.img} className="card-img-top product-img" alt={item.name} />
      </Link>
      <div className="card-body">
        <h4 className="card-title">
          <Link to={`/items/${item.id}`}>{item.name}</Link>
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
