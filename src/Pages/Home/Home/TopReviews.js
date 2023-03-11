import React, { useEffect, useState } from 'react';
import TopReview from './TopReview';

const TopReviews = () => {

  const [topReviews, setTopReviews] = useState([]);
  console.log('topReviews:', topReviews)

  useEffect(() => {
    fetch(`https://food-for-you-server.vercel.app/topreviews`)
      .then((res) => res.json())
      .then((data) => setTopReviews(data));
  }, []);

  return (
    <div>
      <section>
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 col-xl-8 text-center">
            <h3 className="mb-4">What My Customer Says</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
              quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>

        <div className="row text-center">
          {
            topReviews.map(topReview => <TopReview
              key={topReview._id}
              topReview={topReview}
            >
            </TopReview>)
          }
        </div>
      </section>

    </div>

    // <div>

    //   <section style={{ color: "#000", backgroundColor: "" }}>
    //     <div className="container pt-5">
    //       <div className="row d-flex justify-content-center">
    //         <div className="col-md-10 col-xl-8 text-center">
    //           <h3 className="fw-bold mb-4">Testimonials</h3>
    //           <p className="mb-4 pb-2 mb-md-5 pb-md-0">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
    //             numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
    //             quisquam eum porro a pariatur veniam.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="row text-center">
    //         <div className="col-md-4 mb-4 mb-md-0">
    //           <div className="card">
    //             <div className="card-body py-4 mt-2">
    //               <div className="d-flex justify-content-center mb-4">
    //                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt=''
    //                   className="rounded-circle shadow-1-strong" width="100" height="100" />
    //               </div>
    //               <h5 className="font-weight-bold">Teresa May</h5>
    //               <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
    //               <ul className="list-unstyled d-flex justify-content-center">
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star-half-alt fa-sm text-info"></i>
    //                 </li>
    //               </ul>
    //               <p className="mb-2">
    //                 <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
    //                 consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
    //                 ad velit ab hic tenetur.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-4 mb-4 mb-md-0">
    //           <div className="card">
    //             <div className="card-body py-4 mt-2">
    //               <div className="d-flex justify-content-center mb-4">
    //                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp" alt=''
    //                   className="rounded-circle shadow-1-strong" width="100" height="100" />
    //               </div>
    //               <h5 className="font-weight-bold">Maggie McLoan</h5>
    //               <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
    //               <ul className="list-unstyled d-flex justify-content-center">
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //               </ul>
    //               <p className="mb-2">
    //                 <i className="fas fa-quote-left pe-2"></i>Autem, totam debitis suscipit saepe
    //                 sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-4 mb-0">
    //           <div className="card">
    //             <div className="card-body py-4 mt-2">
    //               <div className="d-flex justify-content-center mb-4">
    //                 <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp" alt=''
    //                   className="rounded-circle shadow-1-strong" width="100" height="100" />
    //               </div>
    //               <h5 className="font-weight-bold">Alexa Horwitz</h5>
    //               <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
    //               <ul className="list-unstyled d-flex justify-content-center">
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="fas fa-star fa-sm text-info"></i>
    //                 </li>
    //                 <li>
    //                   <i className="far fa-star fa-sm text-info"></i>
    //                 </li>
    //               </ul>
    //               <p className="mb-2">
    //                 <i className="fas fa-quote-left pe-2"></i>Cras sit amet nibh libero, in gravida
    //                 nulla metus scelerisque ante sollicitudin commodo cras purus odio,

    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    // <section className='my-16'>
    //   <div className='flex justify-between'>
    //     <div>
    //       <h4 className="text-xl text-primary font-bold">Testimonial</h4>
    //       <h2 className="text-4xl">What Our Patients Says</h2>
    //     </div>
    //     <figure>
    //       <img className='w-24 lg:w-48' src={quote} alt="" />
    //     </figure>
    //   </div>
    //   <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    // {
    //   reviews.map(review => <TopReview
    //     key={review._id}
    //     review={review}
    //   >
    //   </TopReview>)
    // }
    //   </div>
    // </section>
  );
};

export default TopReviews;