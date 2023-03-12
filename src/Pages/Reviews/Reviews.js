import React, { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { ScaleLoader } from "react-spinners";
import "./Reviews.css";

const Reviews = () => {
  const [loading, setLoading] = useState(false);

  const { _id, title } = useLoaderData();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  // const location = useLocation();

  // const from = location.state?.from?.pathname || "/";

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || "Not Found";
    const email = user?.email || "Unregistered";
    const image = user?.photoURL || "Not Found";
    const message = form.message.value;
    const ratings = form.ratings.value;

    const review = {
      service: _id,
      serviceName: title,
      customer: name,
      customerImg: image,
      email,
      message,
      ratings,
    };

    setLoading(true);
    fetch("https://food-for-you-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review added successfully!");
          form.reset();
          navigate("/my-reviews");
          setLoading(false);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {user?.email ? (
        <>
          <div>
            <h4 className="mb-3 text-primar text-cente fw-bold form-header mt-4 ms-3 fs-5">
              Give A Review:
            </h4>

            <form
              onSubmit={handleReview}
              className="py-3 mx-3 card border-0 shadow-sm rounded-2"
            >
              <div className="mb-1 reviews mx-auto">
                <input
                  type="text"
                  className="form-control mb-2"
                  name="ratings"
                  placeholder="Give Ratings Out Of 5"
                  required
                ></input>
              </div>

              <div className="mb-1 reviews mx-auto">
                <textarea
                  className="form-control"
                  rows="3"
                  name="message"
                  placeholder="Type Your Review"
                  required
                ></textarea>
              </div>

              <div className="">
                <button
                  className="btn btn-sm btn-submit-review btn-primary"
                  type="submit"
                >
                  {loading ? (
                    <div className="d-flex justify-content-center align-items-center py-1">
                      <ScaleLoader
                        color="#fff"
                        height="12"
                        speedMultiplier=".6"
                      />
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          <div>
            <h4 className="mb-4 ms-3 fw-bold form-header mt-4 fs-4">
              Please
              <Link to="/login" className="text-decoration-none">
                <span className="px-3 px-md-2 px-lg-3 py-1 bg-warning rounded-3 text-white mx-2">
                  Log In
                </span>
              </Link>
              Log In to give a review
            </h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Reviews;
