import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/LoginScreen";
const routers = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routers;
