import React from 'react';
import './Main.module.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
// import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
// import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <div>
            <Container className='mb-4'>
               <Row>
                  {/* <Col lg="2" className='text-start left-nav rounded-2'>
                     <LeftSideNav></LeftSideNav>
                  </Col> */}

                  <Col lg="" className='outlet rounded-2 mb-5'>
                     <Outlet></Outlet>
                  </Col>

                  {/* <Col lg="3">
                     <RightSideNav></RightSideNav>
                  </Col> */}
               </Row>
            </Container>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Main;