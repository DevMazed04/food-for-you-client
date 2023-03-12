import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
// import {RotateLoader} from "react-spinners";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./AllServices.css";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://food-for-you-server.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {
        loading
          ?
          // <div className="loading"> <RotateLoader color="#2776ab"  speedMultiplier=".5" /></div>
          <Loader></Loader>
          :
          <section className="container mb-5">
            <div className="mx-auto w-discover">
              <h2 className="text-center fw-semibold mb-3 fs-tab fs-mob">
                All Delivery Services ({services.length})
              </h2>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service}></ServiceCard>
              ))}
            </div>
          </section>
      }
    </div>
  );
};

export default AllServices;
