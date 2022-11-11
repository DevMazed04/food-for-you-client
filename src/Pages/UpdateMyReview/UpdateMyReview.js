import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import './UpdateMyReview.css';

const UpdateMyReview = () => {
   const storedReview = useLoaderData();
   console.log('stored review:', storedReview);
   console.log('review id:', storedReview._id)

   const [myReview, setMyReview] = useState(storedReview)

   const handleUpdateReview = (event) => {

      event.preventDefault();
      const form = event.target;
      const message = form.message.value;
      console.log('input review:', message);

      fetch(`https://food-for-you-server.vercel.app/reviews/${storedReview._id}`, {
         method: 'PATCH',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({ message })
      })
         .then(res => res.json())
         .then(data => {
            console.log("response data", data);
            setMyReview(message)
            console.log('myReviewww:', myReview.message)
            console.log('updated review:', message);
            if (data.modifiedCount > 0) {
               toast.success('Review updated successfully');
            }
         })

   }

   return (
      <div>
         <h3 className='form-header text-center'>Update Review: {storedReview.serviceName}</h3>
         {/* <form onSubmit={() => handleUpdateReview(storedReview._id)} > */}
         <form onSubmit={handleUpdateReview} >
            <div className="mb-3 reviews mx-auto">
               <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold">Review Text :</label>
               <textarea className="form-control" rows="3" name="message" defaultValue={storedReview.message} placeholder="Type Your Review"></textarea>
            </div>

            <div className='btn-submit-review mx-auto'>
               <button className="btn btn-primary" type="submit">Update Review</button>
            </div>
         </form >
      </div>
   );
};

export default UpdateMyReview;