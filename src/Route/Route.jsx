import {
    createBrowserRouter,
  } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Main from "../LayOut/Main";
import Home from "../LayOut/Home";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ServicePage from "../Pages/ServicePage/ServicePage";
import TeamDetails from "../Pages/TeamDetails/TeamDetails";
import Error from "../Pages/Error/Error";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path:'/contact',
            element: <Contact/>
        },
        {
            path:'/about',
            element: <AboutPage/>
        },
        {
            path:'/services',
            element: <ServicePage/>
        },
        {
          path: '/details/:id',
          element: <TeamDetails/>
        }
      ],
    },
  ]);