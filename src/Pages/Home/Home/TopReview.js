import React from 'react';

const TopReview = ({ topReview }) => {
   const { customer, customerImg, serviceName, message, ratings } = topReview;
   return (

      <div className="col-md-4 mb-5 mb-md-0">
         <div className="d-flex justify-content-center mb-4">
            <img src={customerImg} alt=''
               className="rounded-circle shadow-1-strong" width="150" height="150" />
         </div>
         <h5 className="mb-3">{customer}</h5>
         <h6 className="text-primary mb-3">{serviceName}</h6>
         <p className="px-xl-3">
            <i className="fas fa-quote-left pe-2 mx-2"></i> {message}
         </p>
         <ul className="list-unstyled d-flex justify-content-center mb-0">
            <li>
               {ratings} <i className="fas fa-star fa-sm text-warning"></i> ratings
            </li>
         </ul>
      </div>
   );
};

export default TopReview;