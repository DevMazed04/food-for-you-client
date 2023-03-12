import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import "./UpdateMyReview.css";

const UpdateMyReview = () => {
   const storedReview = useLoaderData();
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const handleUpdateReview = (event) => {
      event.preventDefault();
      const form = event.target;

      const message = form.message.value;
      const ratings = form.ratings.value;

      setLoading(true);
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
               navigate("/my-reviews");
               setLoading(false);
            }
         });
   };

   return (
      <div className="update-review mx-auto">
         <h3 className="form-header text-center fs-4 mb-5">Update Review</h3>

         <form
            onSubmit={handleUpdateReview}
            className="py-3 mx-3 card rounded-3 mt-4 shadow border-top border-0"
         >
            <div className="mb-3 reviews mx-auto">
               <h5 className="card-title text-center text-dark mb-4">
                  <b></b> {storedReview.serviceName}
               </h5>
               <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label fw-semibold"
               >
                  Ratings:
               </label>
               <input
                  type="text"
                  maxLength="3"
                  className="form-control"
                  name="ratings"
                  defaultValue={storedReview.ratings}
               ></input>
            </div>

            <div className="mb-3 reviews mx-auto">
               <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label fw-semibold"
               >
                  Review Text:
               </label>
               <textarea
                  className="form-control"
                  rows="3"
                  name="message"
                  defaultValue={storedReview.message}
               ></textarea>
            </div>

            <div className="">
               <button
                  className="btn btn-update-review btn-primary ms-4"
                  type="submit"
               >
                  {loading ? (
                     <div className="d-flex justify-content-center align-items-center py-1">
                        <ScaleLoader color="#fff" height="12" speedMultiplier=".6" />
                     </div>
                  ) : (
                     "Update"
                  )}
               </button>
            </div>
         </form>
      </div>
   );
};

export default UpdateMyReview;
