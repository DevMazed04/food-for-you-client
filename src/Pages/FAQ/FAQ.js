import React from 'react';

const FAQ = () => {
   return (
      <div>
         <h3 className='text-center'>Frequently Asked Questions</h3>

         <div className="accordion border border-0 mx-auto mt-4 mt-sm-5 my-lg-4 px-4 px-lg-5 rounded nav-width"
            id="accordionExample">
            <div className="accordion-item border border-0 mb-3">
               <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 rounded border"
                     type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                     aria-controls="collapseOne">
                     How many services are available on "Food For You" website?
                  </button>
               </h2>
               <div id="collapseOne" className="accordion-collapse collapse show rounded-3" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 px-3 text-start">
                     <small>
                        Currently there are six services available.The services are: <br />
                        <b>1)</b> C Programming For Beginners, <br />
                        <b>2)</b> C++ From Beginner to Expert, <br />
                        <b>3)</b> Java Programming Masterclass,
                        <br />
                        <b>4)</b> The Complete Python Course, <br />
                        <b>5)</b> JavaScript: The Complete Guide, <br />
                        <b>6)</b> React Development Bootcamp.
                        <br />
                        We upload more courses as soon as possible, Thank you.
                     </small>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FAQ;