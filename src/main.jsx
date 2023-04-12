import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import AppliedJobs from "./Components/AppliedJobs";
import JobDetails from "./Components/JobDetails";
import Statistics from "./Elements/Statistics";
import Blog from "./Elements/Blog";
import { getData, fetchData, jobdetails } from "./../src/utills/fetchData";
import Error from "./Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: getData,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/job/:Id",
        element: <JobDetails></JobDetails>,
        loader: getData,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
