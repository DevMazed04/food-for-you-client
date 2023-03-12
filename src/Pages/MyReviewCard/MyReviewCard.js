import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import "./MyReviewCard.css";

const MyReviewCard = ({ myReview, refresh, setRefresh }) => {
  const { _id, serviceName, message, ratings } = myReview;

  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this review?");
    if (proceed) {
      setLoading(true);
      fetch(`https://food-for-you-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Review deleted successfully");
            setLoading(false);
            setRefresh(!refresh);
          }
        });
    }
  };

  return (
    <div className="col">
      <div className="card rounded-4 review-card mx-auto p-3 shadow border-top border-0">
        <div className="d-flex align-items-center">
          <div className="card-body">
            <h5 className="card-title text-center text-success mb-4">
              <b></b> {serviceName}
            </h5>
            <p className="card-title">
              <b>Review:</b> {message}
            </p>
            <p className="card-title">
              <b>Ratings:</b> {ratings}
              <i className="fas fa-star fa-sm fw-semibold ms-1"></i>
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mb-2">
          <Link to={`/update-my-review/${_id}`}>
            <button className="btn btn-sm btn-outline-primary btn-width mt-3 me-3">
              Update Review
            </button>
          </Link>
          <Link>
            <button
              className="btn btn-sm btn-outline-danger btn-width mt-3"
              onClick={() => handleDelete(_id)}
            >
              {loading ? (
                <div className="d-flex justify-content-center align-items-center py-1">
                  <ScaleLoader color="red" height="13" speedMultiplier=".6" />
                </div>
              ) : (
                "Delete Review"
              )}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
