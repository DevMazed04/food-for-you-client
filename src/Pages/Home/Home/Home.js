import React from "react";
import { Link } from "react-router-dom";
import Services from "../../Shared/Services/Services";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = () => {
   return (
      <section>
         <Slider></Slider>

         <div className='mt-5 border-danger header mx-auto rounded-4 px-0 py-2 d-flex justify-content-around align-items-center py-3 py-sm-0 header-bg'>
            <div>
               <img className='rounded-4 mt-5 d-flex' src="https://i.ibb.co/X2xWdxM/essential-feature-of-building-an-on-demand-food-ordering-app.jpg" alt="" width="250px" />
            </div>
            <div className='text-start w-50 mt-5'>
               <h2>What is your Delivery Today?</h2>
               <small className='text-secondary'>Welcome to my <strong>Food For You</strong> website. You can visit my website, choose your favourite food items and make a delivery service order. I will deliver to your items in time. </small>
            </div>
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

         <div className="mx-auto w-discover">
            <h1 className="text-center fw-semibold mb-3 fs-tab fs-mob mt-5">
               About My Services
            </h1>
            <p className="text-center text-secondary lh-tab w-info mx-auto">
               <small>
                  My delivery service provides fast, often same-day delivery, within a particular area. A service may specialize in a specific type of delivery, such as delivering food, or it might deliver all kinds of packages.
               </small>
            </p>
         </div>
      </section>
   );
};

export default Home;
