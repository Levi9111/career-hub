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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`fakeDb.json`),
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "details",
        element: <JobDetails></JobDetails>,
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
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
