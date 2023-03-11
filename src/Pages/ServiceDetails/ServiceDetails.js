import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ServiceDetails.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Reviews from "../Reviews/Reviews";
import ReviewCard from "../ReviewCard/ReviewCard";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { _id, title, description, price, img } = serviceDetails;
  // console.log('serviceDetails:', serviceDetails);

  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://food-for-you-server.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <div className="d-flex flex-column flex-md-row gap-3">
        <div>
          <Container className="">
            <Row className="">
              <Col className="rounded-2 mb-5 servic">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 g-4 service-detail">
                  <div className="col mx-auto">
                    <div className="card p-4 pb-2 rounded-3 border-0 shadow-lg">
                      <PhotoProvider>
                        <PhotoView src={img}>
                          <img
                            src={img}
                            className="card-img-top bg-dark rounded-3"
                            alt={title}
                            height="300px"
                            style={{ objectFit: "cover", cursor: "pointer" }}
                          />
                        </PhotoView>
                      </PhotoProvider>

                      <div className="card-body">
                        <h4 className="card-title fw-bold mb-3">Name: {title}</h4>
                        <h5 className="card-text mb-3 ">
                          <b>Price:</b> <span className="fw-bold text-primary">${price}</span>
                        </h5>
                        <div className="card-text">
                          <p className="text-decoration-underline mb-1 fw-bold fs-6">
                            Description:
                          </p>
                          {description}
                        </div>

                        <Link to={`/checkout/${_id}`}>
                          <button className="btn btn-sm btn-outline-primary btn-width mt-3">
                            <span className="d-flex justify-content-between">
                              <div>Order Now</div>
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="service-details">
          <Reviews></Reviews>

          <div className="">
            <h3 className="form-header fw-bold ms-3 mt-5 mb-3 fs-5">All Reviews ({reviews.length})</h3>

            <div className="row row-cols-1 g-3">
              {reviews.map(review => <ReviewCard
                key={review._id}
                review={review}>
              </ReviewCard>)
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;
