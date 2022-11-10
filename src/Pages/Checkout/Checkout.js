import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
   const serviceDetails = useLoaderData();
   const { title } = serviceDetails;
   return (
      <div>
         {/* <h2 className='text-center mb-5'>Checkout Page</h2> */}

         <h4 className='bg-white mx-auto p-5 rounded-5 text-center order'>
            Your <br /><span className='fw-bold text-primary fs-4'> {title} </span>
            <p className='mt-1'>
               Order has been taken.
            </p>
            <p className='mt-'>
               <small>The delivery arrives to you about 30 minutes.</small>
               <br /> <small> Thank You!</small>
            </p>

            {/* <p className='mt-1' >
               Thank You!
            </p> */}
         </h4>
      </div>
   );
};

export default Checkout;