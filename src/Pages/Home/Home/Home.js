import React from "react";
import { Link } from "react-router-dom";
import Services from "../../Shared/Services/Services";
import Slider from "../Slider/Slider";
import "./Home.css";
import Lottie from "lottie-react";
import delivery from "../../../deliveryFood.json";
import TopReviews from "./TopReviews";

const Home = () => {
   return (
      <section className="">
         <Slider></Slider>


         <div className='mt-5 border-danger header mx-auto rounded-4 px-0 py-2 d-flex flex-lg-row-reverse justify-content-around gap-4 gap-md-5 align-items-center py-3 py-sm-0 header-bg'>

            <div className="lottie">
               <Lottie animationData={delivery} loop={true} />
            </div>

            <div className='text-start w-header mt-5'>
               <h2 className="mb-3">What is your Delivery Today?</h2>
               <small className='text-secondary'>Welcome to my <strong>Food For You</strong> website. You can visit my website, choose your favourite food items and make a delivery service order. I will deliver to your items in time. Don't forget to give your precious review and inspire others to visit my website and make orders. </small>
            </div>
         </div>
         
         <Services></Services>

         <div className="d-flex justify-content-center">
            <div>
               <Link
                  to="/services"
                  className="btn btn-primary bg-gradient px-3 py-2 view-all mb-5"
               >
                  See All Services
               </Link>
            </div>
         </div>

         {/* <div className="mx-auto w-discover">
            <h1 className="text-center fw-semibold mb-3 fs-tab fs-mob mt-5">
               About My Services
            </h1>
            <p className="text-center text-secondary lh-tab w-info mx-auto">
               <small>
                  My delivery service provides fast, often same-day delivery, within a particular area. A service may specialize in a specific type of delivery, such as delivering food, or it might deliver all kinds of packages.
               </small>
            </p>
         </div> */}

         <TopReviews></TopReviews>
      </section>
   );
};

export default Home;
