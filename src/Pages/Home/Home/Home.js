import React from "react";
import { Link } from "react-router-dom";
import Services from "../../Shared/Services/Services";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = () => {
   return (
      <section>
         <Slider></Slider>

         <div className="mx-auto w-discover">
            <h1 className="text-center fw-semibold mb-3 fs-tab fs-mob mt-5">
               Online Food Delivery
            </h1>
            <p className="text-center text-secondary lh-tab w-info mx-auto">
               <small>
                  Curiosity is the process of asking questions, genuine questions,
                  that are not leading to an ask for something in return. That are
                  leading to an ask for something.
               </small>
            </p>
         </div>

         <Services></Services>

         <div className="d-flex justify-content-center">
            <div>
               <Link
                  to="/services"
                  className="btn btn-primary bg-gradient px-4 py-2 view-all mb-5"
               >
                  See All Services
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Home;
