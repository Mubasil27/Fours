import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const names = useSelector((state) => state.cart);
  const prices = names.reduce((numm, summ) => numm + summ.price * summ.quantity, 0);

  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  const handleSearchClick = () => {
    // Toggle search input visibility
    setIsSearchVisible((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    // Close search input if clicked outside
    if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
      setIsSearchVisible(false);
    }
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/all?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="two">
      {/* Navbar Start */}
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#">
            <div className="ok"></div>
          </a>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link Success mx-lg-2" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#category">
                    Category
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#Product">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#review">
                    Review
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="#Contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2">
                    Total Price: {prices}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Search Input */}
          <div className="d-flex align-items-center">
            {isSearchVisible && (
               <input
               ref={searchInputRef}
               type="text"
               placeholder="Search..."
               className={`search-input ${isSearchVisible ? "search-visible" : ""}`}
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               onKeyPress={(e) => {
                 if (e.key === "Enter") handleSearchSubmit();
               }}
             />
             
              
            )}
            <i
              className="bi bi-search"
              onClick={(e) => {
                e.stopPropagation(); // Prevents window click event
                handleSearchClick();
              }}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            ></i>

            <Link to="/cart" style={{ marginLeft: "10px" }}>
              <i className="bi bi-cart-fill">{names.length}</i>
            </Link>
          </div>
          <Link className="Login-button" to="/login" style={{ marginLeft: "10px" }}>
            Login
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
};

export default App;
