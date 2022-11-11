import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from '../ReviewCard/ReviewCard';
import './MyReviews.css';

const MyReviews = () => {

   const { user } = useContext(AuthContext);
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetch(`http://localhost:5000/reviews?email=${user?.email}`)
         .then((res) => res.json())
         .then((data) => setReviews(data));
   }, [user?.email]);

   return (
      <div>
         <h2>My Reviews</h2>
         <h3 className="text-center">Total Reviews: {reviews.length}</h3>

         <div className="row row-cols-1 row-cols-md-1 g-4">
            {reviews.map(review => <ReviewCard
               key={review._id}
               review={review}>
            </ReviewCard>)
            }
         </div>
      </div>
   );
};

export default MyReviews;