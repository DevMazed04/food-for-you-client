import React from 'react';

const SliderItem = ({ sliderImg }) => {
  return (
    <div className="carousel-item active">
      <img src={sliderImg} className="d-block w-100 carousel-img" alt="slider-img-1" />
      <div className="carousel-caption d-flex align-items-center justify-content-center h-100"
        style={{ marginBottom: "20px" }}>
        <div className="w-75">
          <h1 className="fw-semibold mb-3 lh-sm fs-slider-h1">Online Food Delivery
            <br className="lh-slider" />
            To Your Home
          </h1>
          <p className="fw-lighter lh-tab lh-mob"><small>Online Food Delivery is the method
            based on
            the
            use of new digital tools to enable learners to learn in a different way.</small>
          </p>
          <div className="btn btn-primary bg-gradient px-md-3 px-lg-4 py-md-2 mt-2"
            data-bs-toggle="modal" data-bs-target="#ModalForm">Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;