import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <section className="container my-5">
        <div className="mx-auto w-discover">
          <h1 className="text-center fw-semibold mb-3 fs-tab fs-mob mt-5">
            My Food Services ({services.length}){" "}
          </h1>
          <p className="text-center text-secondary lh-tab w-info mx-auto">
            <small>
              Curiosity is the process of asking questions, genuine questions,
              that are not leading to an ask for something in return. That are
              leading to an ask for something.
            </small>
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>

        <div className="d-flex justify-content-center">
          <div className="mt-5">
            <Link
              to="/services"
              className="btn btn-primary bg-gradient px-4 py-2 view-all mb-5"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
