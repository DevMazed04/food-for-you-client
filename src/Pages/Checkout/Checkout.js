import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
   const serviceDetails = useLoaderData();
   const { title } = serviceDetails;
   return (
      <div>
         {/* <h2 className='text-center mb-5'>Checkout Page</h2> */}

         <h4 className="bg-white mx-auto p-5 rounded-5 text-center order fs-5">
            Your <br />
            <span className="fw-bold text-primary fs-4"> {title} </span>
            <p className="mt-1 fs-5">Order has been taken.</p>
            <p className="fs-4">
               <small>The delivery arrives to you about 30 minutes.</small> <br />
               <small className="text-success"> Thank You!</small>
            </p>
         </h4>
      </div>
   );
};

export default Checkout;
