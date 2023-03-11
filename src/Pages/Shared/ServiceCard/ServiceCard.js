import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ServiceCard = ({ service }) => {
  const { _id, title, price, img, description } = service;

  return (
    <div className="col">
      <div className="card service-card rounded-2 border-0 p-3 rounded-3 shadow-lg">
        <PhotoProvider>
          <PhotoView src={img}>
            <LazyLoadImage src={img} className="card-img-top  bg-dark rounded-3"
              alt={title}
              height="150px"
              placeholderSrc={img}
              effect="blur"
              style={{ objectFit: 'cover', cursor: "pointer" }} />
          </PhotoView>
        </PhotoProvider>

        <div className="card-body px-0 pb-0">
          <h5 className="card-title m-0 name text-start fw-bold">{title}</h5>

          <p className="card-text mt-2">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description
            }
          </p>

          <div className='d-flex justify-content-between mt-3 text-primary'>
            <h5 className='fw-bold'>${price}</h5>
            <div>
              <Link to={`/services/${_id}`}>
                <button className='btn btn-sm btn-outline-primary btn-width'>
                  <span className='d-flex justify-content-between'>
                    <div>View Details</div>
                  </span>
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;