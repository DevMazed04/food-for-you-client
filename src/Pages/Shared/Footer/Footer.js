import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (

    <div className="footer-style">
      <footer
        className="text-center text-lg-start text-white"
        // style={{ backgroundColor: "#45526e" }}
        style={{ backgroundColor: "#002a46" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Food For You
                </h6>
                <p>
                  You can visit my website, choose your favourite food and make
                  a delivery order. Please don't forget to give your valuable
                  review.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Foods</h6>
                <p>
                  <Link
                    to="/services/636e68ead7253d2a6f140c65"
                    className="text-white text-decoration-none u-link"
                  >
                    Italian Pizza
                  </Link>
                </p>
                <p>
                  <Link
                    to="/services/636e68ead7253d2a6f140c67"
                    className="text-white text-decoration-none u-link"
                  >
                    French Fries
                  </Link>
                </p>
                <p>
                  <Link
                    to="/services/636e68ead7253d2a6f140c66"
                    className="text-white text-decoration-none u-link"
                  >
                    Beef Burger
                  </Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Useful links
                </h6>
                <p>
                  <Link
                    to="/register"
                    className="text-white text-decoration-none u-link"
                  >
                    Register
                  </Link>
                </p>
                <p>
                  <Link to="/login" className="text-white text-decoration-none u-link">
                    Login
                  </Link>
                </p>
                <p>
                  <Link to="/blog" className="text-white text-decoration-none u-link">
                    Blogs
                  </Link>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact Me
                </h6>
                <p>
                  <i className="fas fa-home mr-3 me-1"></i> Savar, Dhaka,
                  Bangladesh
                </p>
                <p>
                  <i className="fas fa-envelope mr-3 me-1"></i>{" "}
                  mdmazedislam2684@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3 me-1"></i> +8801773149173
                </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2023 Copyright To
                  <a href="/" className="ms-2 fw-bold text-decoration-none copyright u-link">
                    Food For You
                  </a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  href="https://dev-mazed-portfolio.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light social-button btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fa-solid fa-globe"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/md-mazedul-islam/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-floating social-button m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  href="https://github.com/DevMazed04"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-floating social-button m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>

                <a
                  href="https://www.facebook.com/DevMazed/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-floating social-button m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
