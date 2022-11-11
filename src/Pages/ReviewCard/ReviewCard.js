import React from 'react';
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
   const { customer, customerImg, message } = review;

   return (
      <div className="col">
         <div className="card rounded-3 review-card mx-auto">
            <div className='d-flex align-items-center'>
               <div>
                  <img src={customerImg} className="card-img-top rounded-3 img-width ms-2" alt={customer} />
               </div>
               <div className="card-body" >
                  <p className="card-title"><b>Name:</b> {customer}</p>
                  <p className="card-text"><b>Review:</b> {message}</p>
               </div>
            </div>
         </div>
      </div >
   );
};

export default ReviewCard;