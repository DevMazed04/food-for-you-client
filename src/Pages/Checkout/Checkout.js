import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
   const courseDetails = useLoaderData();
   const { name } = courseDetails;
   return (
      <div>
         <h2 className='text-center mb-5'>Checkout Page</h2>

         <h4 className='bg-white mx-auto p-5 rounded-5 text-center'>Premium access for
            <span className='fw-bold text-success fst-italic'> {name} </span>
            course has been given. Thank You!</h4>
      </div>
   );
};

export default Checkout;