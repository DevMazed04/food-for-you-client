import React from 'react';
import Services from '../../Shared/Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
   return (
      <section>
         <Slider></Slider>
         <Services></Services>

         {/* <div className='mt-5 border-danger header mx-auto rounded-4 px-0 py-2  d-flex justify-content-between  align-items-center ps-4 py-3 py-sm-0 header-bg'> */}
         {/* <div className='text-start w-50'>
               <h2>What to learn next?</h2>
               <small className='text-secondary'>Welcome to my <strong>Programming Path</strong> website. You can visit my website and chosse your favourite programming course which you like. Happy programming</small>
            </div> */}

         {/* <div>
               <img className='rounded-4' src={headerImg} alt="" width="130px" />
            </div> */}
         {/* </div> */}
      </section>
   );
};

export default Home;