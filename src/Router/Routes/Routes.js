import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
// import Checkout from "../../Pages/Checkout/Checkout";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/Page404/Page404";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Shared/Services/Services";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            loader: () => fetch("https://programming-path-server.vercel.app/services")
         },
         // {
         //    path: '/service-details/:id',
         //    element: <serviceDetails></serviceDetails>,
         //    loader: ({ params }) => fetch(`https://programming-path-server.vercel.app/service-details/${params.id}`)
         // },
         // {
         //    path: '/checkout-service/:id',
         //    // loader: ({ params }) => fetch(`https://programming-path-server.vercel.app/service-details/${params.id}`),
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