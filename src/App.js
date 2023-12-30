import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Appointment from "./components/Appointment";
import CoachHome from "./components/CoachHome";
import CoachLogin from "./components/CoachLogin";
import UserLogin from "./components/UserLogin";
import CoachSignUp from "./components/CoachSignUp";
import HomePage from "./components/HomePage";
import UserSignUp from "./components/UserSignup";
import HomeUser from "./components/HomeUser";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/coachhome",
        element: <CoachHome />,
      },
      {
        path: "/coachsignup",
        element: <CoachSignUp />,
      },
      {
        path: "/coachlogin",
        element: <CoachLogin />,
      },
      {
        path: "/coachhome",
        element: <CoachHome />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/userlogin",
        element: <UserLogin />,
      },
      {
        path: "/usersignup",
        element: <UserSignUp />,
      },
      {
        path: "/userhome",
        element: <HomeUser />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <Routes />
  </RouterProvider>
);
