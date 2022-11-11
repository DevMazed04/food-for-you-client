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
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <Container>
        <Row>
          <Col className="rounded-2 mb-5 service">
            <div className="row row-cols-1 row-cols-md-2 g-4 service-details">
              <div className="col mx-auto">
                <div className="card p-4 pb-2 rounded-3 border border-0 shadow-lg">
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
                      <b>Price:</b> <span className="fw-bold">${price}</span>
                    </h5>
                    <div className="card-text">
                      <p className="text-decoration-underline mb-1 fw-bold">
                        service Description:
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

      <div>
        <h3 className="text-center">Total Reviews: {reviews.length}</h3>

        <div className="row row-cols-1 row-cols-md-1 g-4">
          {reviews.map(review => <ReviewCard
            key={review._id}
            review={review}>
          </ReviewCard>)
          }
        </div>
      </div>
      <hr />
      <Reviews></Reviews>
    </div>
  );
};

export default ServiceDetails;
