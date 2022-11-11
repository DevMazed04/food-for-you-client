import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Reviews.css';

const Reviews = () => {
  const { _id, title } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || 'Not Found';
    const email = user?.email || 'Unregistered';
    const image = user?.photoURL || 'Not Found';
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      customer: name,
      customerImg: image,
      email,
      message
    }

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('Review added successfully!')
          form.reset();
          window.location.reload();
        }
      })
      .catch(err => console.error(err));

  }

  return (
    <div>
      <h4 className="mb-4 text-primar text-center fw-bold form-header mt-5">
        Give A Review:
      </h4>

      <form onSubmit={handleReview}>
        <div className="mb-3 w-50 mx-auto">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Review Text</label>
          <textarea className="form-control" rows="3" name="message" placeholder="Type Your Review"></textarea>
        </div>

        <div className='w-50 mx-auto'>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form >
    </div >
  );
};

export default Reviews;