import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/LoginScreen";
import Register from "../pages/RegisterScreen/RegisterScreen";
const routers = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);

export default routers;
