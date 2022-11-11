import React from 'react';
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
   const { customer, customerImg, message } = review;

   return (
      <div className="col">
         <div className="card d-flex rounded-3">
            <div>
               <img src={customerImg} className="card-img-top rounded-pill img-width" alt={customer} />
            </div>
            <div className="card-body" >
               <h5 className="card-title">{customer}</h5>
               <p className="card-text">{message}</p>
            </div>
         </div>
      </div >
   );
};

export default ReviewCard;