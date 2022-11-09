import React from 'react';
import './Slider.css';
import img1 from '../../../assets/images/slider/1.jpg';
import img2 from '../../../assets/images/slider/2.jpg';
import img3 from '../../../assets/images/slider/3.jpg';
import { Link } from 'react-router-dom';
// import SliderItem from './SliderItem';

const Slider = () => {

  return (
    <section className="container mt-1 mt-sm-3 padd-slider">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner rounded slider-overlay">
          {/* <SliderItem sliderImg={img1}></SliderItem>
          <SliderItem sliderImg={img2}></SliderItem>
          <SliderItem sliderImg={img3}></SliderItem> */}

          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 carousel-img" alt="slider-img-1" />
            <div className="carousel-caption d-flex align-items-center justify-content-center h-100 car-cap">
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
                <div>
                  <button className="btn btn-primary bg-gradient px-md-3 px-lg-4 py-md-2 mt-2">
                    <Link to="/login" className='btn-order'>Order Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img2} className="d-block w-100 carousel-img" alt="slider-img-2" />
            <div className="carousel-caption d-flex align-items-center justify-content-center h-100 car-cap">
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
                <div>
                  <button className="btn btn-primary bg-gradient px-md-3 px-lg-4 py-md-2 mt-2">
                    <Link to="/login" className='btn-order'>Order Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img3} className="d-block w-100 carousel-img" alt="slider-img-3" />
            <div className="carousel-caption d-flex align-items-center justify-content-center h-100 car-cap">
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
                <div>
                  <button className="btn btn-primary bg-gradient px-md-3 px-lg-4 py-md-2 mt-2">
                    <Link to="/login" className='btn-order'>Order Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon w-25" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span className="carousel-control-next-icon w-25" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Slider;