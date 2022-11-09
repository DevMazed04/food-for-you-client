import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
// import Checkout from "../../Pages/Checkout/Checkout";
// import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
// import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/Page404/Page404";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Shared/Services/Services";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import LeftSideNav from "../../Pages/Shared/LeftSideNav/LeftSideNav";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/home',
            element: <Home></Home>
         },
         {
            path: '/services',
            element: <Services></Services>,
            loader: () => fetch("https://programming-path-server.vercel.app/courses")
         },
         // {
         //    path: '/course-details/:id',
         //    element: <CourseDetails></CourseDetails>,
         //    loader: ({ params }) => fetch(`https://programming-path-server.vercel.app/course-details/${params.id}`)
         // },
         // {
         //    path: '/checkout-course/:id',
         //    // loader: ({ params }) => fetch(`https://programming-path-server.vercel.app/course-details/${params.id}`),
         //    element:
         //       <PrivateRoute>
         //          <Checkout></Checkout>
         //       </PrivateRoute>
         // },
         {
            path: '/faq',
            element: <FAQ></FAQ>
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         }
      ]
   },
   {
      path: '*',
      element: <Page404></Page404>
   }
])