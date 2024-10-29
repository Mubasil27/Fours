
import React from "react";


const Client = () => {
  return (
    <div id="review" className="client-review-section">
      <div className="aaa"></div>
      <div className="client-header">
        <h1><span>What Clients Say About Us</span></h1>
      </div>
      <div className="carousel-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="review-card">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  dicta minus molestiae vel beatae natus eveniet ratione
                  temporibus aperiam harum alias officiis assumenda officia
                  quibusdam deleniti eos cupiditate dolore doloribus!"
                </p>
                <div className="client-info">
                  <i className="bi bi-person-fill client-icon"></i>
                  <span className="client-name">John Doe</span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="review-card">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  dicta minus molestiae vel beatae natus eveniet ratione
                  temporibus aperiam harum alias officiis assumenda officia
                  quibusdam deleniti eos cupiditate dolore doloribus!"
                </p>
                <div className="client-info">
                  <i className="bi bi-person-fill client-icon"></i>
                  <span className="client-name">Jane Smith</span>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="review-card">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  dicta minus molestiae vel beatae natus eveniet ratione
                  temporibus aperiam harum alias officiis assumenda officia
                  quibusdam deleniti eos cupiditate dolore doloribus!"
                </p>
                <div className="client-info">
                  <i className="bi bi-person-fill client-icon"></i>
                  <span className="client-name">Mark Johnson</span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
