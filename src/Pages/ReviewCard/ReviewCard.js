import React from 'react';
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
   const { customer, customerImg, message, ratings } = review;

   return (
      <div className="col">
         <div className="card rounded-3 review-card mx-auto">
            <div className='d-flex align-items-center px-2'>
               <div>
                  <img src={customerImg} className="card-img-top rounded-3 img-width ms-2" alt="" />
               </div>
               <div className="card-body" >
                  <p className="card-title mb-1"><b>Name:</b> {customer}</p>
                  <p className="card-text mb-1">
                     <b className='me-1'>Review:</b>
                     {message}
                     {/* <span className='fw-semibold ms-1'>({ratings} <i className="fas fa-star fa-sm fw-semibold"></i>)</span> */}
                  </p>
                  <p className="card-text"><b>Ratings:</b>
                     <span className='fw-semibold ms-1'>{ratings} <i className="fas fa-star fa-sm fw-semibold"></i></span>
                  </p>
               </div>
            </div>
         </div>
      </div >
   );
};

export default ReviewCard;