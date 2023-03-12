import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewCard from "../MyReviewCard/MyReviewCard";
import Loader from "../Shared/Loader/Loader";
import "./MyReviews.css";

const MyReviews = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://food-for-you-server.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [refresh]);

  const myReviews = reviews.filter((r) => r.email === user.email);

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <div>
            {myReviews.length === 0 ? (
              <p className="fs-5 fw-semibold text-danger d-flex justify-content-center align-items-center no-reviews text-center">
                You have no reviews yet!
              </p>
            ) : (
              <section>
                <h4 className="mb-4 text-primar text-center fw-bold form-header">
                  My Reviews ({myReviews.length})
                </h4>

                <div className="row row-cols-1 my-reviews mx-auto">
                  {myReviews.map((myReview) => (
                    <MyReviewCard
                      key={myReview._id}
                      myReview={myReview}
                      refresh={refresh}
                      setRefresh={setRefresh}
                    ></MyReviewCard>
                  ))}
                </div>
              </section>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MyReviews;
