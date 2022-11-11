import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './MyReviewCard.css';

const MyReviewCard = ({ myReview }) => {
  const { _id, serviceName, message } = myReview;
  console.log('_id:', _id)

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure to delete this review?');
    if (proceed) {
      fetch(`https://food-for-you-server.vercel.app/reviews/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success('Review deleted successfully');
          }
          window.location.reload();
        })
    }
  }

  return (
    <div className="col">
      <div className="card rounded-4 review-card mx-auto p-3">
        <div className='d-flex align-items-center'>
          <div className="card-body" >
            <p className="card-title"><b>Service Name:</b> {serviceName}</p>
            <p className="card-text"><b>Review:</b> {message}</p>
          </div>
        </div>

        <div className='d-flex justify-content-center'>
          <Link to={`/update-my-review/${_id}`}>
            <button className="btn btn-sm btn-outline-primary btn-width mt-3 me-3">  {/* onClick={() => handleUpdate(_id)} */}
              Edit Review
            </button>
          </Link>
          <Link>
            <button className="btn btn-sm btn-outline-danger btn-width mt-3 me-3" onClick={() => handleDelete(_id)}>
              Delete Review
            </button>
          </Link>
        </div>
      </div>
    </div >
  );
};

export default MyReviewCard;