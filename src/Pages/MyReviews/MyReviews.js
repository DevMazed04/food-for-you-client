import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewCard from "../MyReviewCard/MyReviewCard";
import "./MyReviews.css";

const MyReviews = () => {
   const { user } = useContext(AuthContext);
   const [myReviews, setMyReviews] = useState([]);

   useEffect(() => {
      fetch(`https://food-for-you-server.vercel.app/reviews?email=${user?.email}`)
         .then((res) => res.json())
         .then((data) => setMyReviews(data));
   }, [user?.email]);

   return (
      <div>
         {
            myReviews.length === 0 ? <p className="fs-4 fw-semibold text-danger d-flex justify-content-center align-items-center">No reviews were added</p>
               :
               <section>
                  <h4 className="mb-4 text-primar text-center fw-bold form-header">
                     My Reviews ({myReviews.length})
                  </h4>

                  <div className="row row-cols-1 row-cols-md-1 g-4">
                     {myReviews.map((myReview) => (
                        <MyReviewCard key={myReview._id} myReview={myReview}></MyReviewCard>
                     ))}
                  </div>
               </section>

         }


      </div>
   );
};

export default MyReviews;
