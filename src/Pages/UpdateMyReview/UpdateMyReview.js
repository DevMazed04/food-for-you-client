import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import "./UpdateMyReview.css";

const UpdateMyReview = () => {
   const storedReview = useLoaderData();

   const handleUpdateReview = (event) => {
      event.preventDefault();
      const form = event.target;

      const message = form.message.value;
      const ratings = form.ratings.value;

      fetch(
         `https://food-for-you-server.vercel.app/reviews/${storedReview._id}`,
         {
            method: "PATCH",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify({ message, ratings }),
         }
      )
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount > 0) {
               toast.success("Review updated successfully");
            }
         });
   };

   return (
      <div className="update-review mx-auto">
         <h3 className="form-header text-center fs-4">
            Update Review: {storedReview.serviceName}
         </h3>

         <form onSubmit={handleUpdateReview} className="py-3 mx-3 card border-0 shadow rounded-3 mt-4">
            <div className="mb-3 reviews mx-auto">
               <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label fw-semibold">Ratings:
               </label>
               <input
                  type="number"
                  maxLength="2"
                  className="form-control"
                  name="ratings"
                  defaultValue={storedReview.ratings}
               ></input>
            </div>

            <div className="mb-3 reviews mx-auto">
               <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label fw-semibold">Review Text:
               </label>
               <textarea
                  className="form-control"
                  rows="3"
                  name="message"
                  defaultValue={storedReview.message}
               ></textarea>
            </div>

            <div className=''>
               <button className="btn btn-update-review btn-primary ms-4" type="submit">Update</button>
            </div>
         </form>
      </div>
   );
};

export default UpdateMyReview;
