import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Page404 from "../../Pages/Page404/Page404";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import AllServices from "../../Pages/Shared/Services/AllServices";
import Services from "../../Pages/Shared/Services/Services";
import UpdateMyReview from "../../Pages/UpdateMyReview/UpdateMyReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            element: <AllServices></AllServices>,
         },
         {
            path: '/services/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({ params }) => fetch(`https://food-for-you-server.vercel.app/services/${params.id}`)
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
         },
         {
            path: '/checkout/:id',
            loader: ({ params }) => fetch(`https://food-for-you-server.vercel.app/services/${params.id}`),
            element:
               <PrivateRoute>
                  <Checkout></Checkout>
               </PrivateRoute>
         },
         {
            path: '/my-reviews',
            element:
               <PrivateRoute>
                  <MyReviews></MyReviews>
               </PrivateRoute>
         },
         {
            path: '/update-my-review/:id',
            loader: ({ params }) => fetch(`https://food-for-you-server.vercel.app/reviews/${params.id}`),
            element:
               <UpdateMyReview></UpdateMyReview>
         },
         {
            path: '/add-service',
            element:
               <PrivateRoute>
                  <AddService></AddService>
               </PrivateRoute>
         },
      ]
   },
   {
      path: '*',
      element: <Page404></Page404>
   }
])