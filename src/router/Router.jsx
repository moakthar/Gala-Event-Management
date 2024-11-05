import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import About from "../pages/about/About";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Contact from "../pages/contact/Contact";

import ErrorPage from "../pages/error/ErrorPage";

import Home from "../pages/home/Home";
import Booking from "../pages/bookings/Booking";
import Events from "../pages/allEvents/Events";
import EventDetails from "../pages/eventDetails/EventDetails";
import RequestOrganizer from "../pages/RequestOrganizer/RequestOrganizer";
import CustomEvent from "../pages/customEvent/CustomEvent";
import Portfolio from "../pages/portfolio/Portfolio";
import EmailSend from "../pages/auth/forgot/EmailSend";
import ResetPassword from "../pages/auth/forgot/ResetPassword";
import Profile from "../pages/dashboard/profile/Profile";
import SecretPage from "./SecretPage";
import PaymentOptions from "../pages/customEvent/Payment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/event-details/:_id",
        element: <EventDetails />,
      },
      {
        path: "/create-your-event",
        element: <CustomEvent />,
      },
      {
        path: "/pricing",
        element: <Booking />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: (
          <SecretPage>
            <Login />
          </SecretPage>
        ),
      },
      {
        path: "/register",
        element: (
          <SecretPage>
            <Register />
          </SecretPage>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <SecretPage>
            <EmailSend />
          </SecretPage>
        ),
      },
      {
        path: "/reset-password",
        element: (
          <SecretPage>
            <ResetPassword />
          </SecretPage>
        ),
      },
      {
        path: "/request-organizer",
        element: <RequestOrganizer />,
      },
      {
        path: "/user-profile",
        element: <Profile />,
      },
    ],
  },
]);

export default Router;
