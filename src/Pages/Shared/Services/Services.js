import React, { useEffect, useState } from "react";
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
      <section className="container mb-5">
        <div className="mx-auto w-discover">
          <h2 className="text-center fw-semibold mb-3 fs-tab fs-mob mt-5">
            My Delivery Services ({services.length})
          </h2>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
