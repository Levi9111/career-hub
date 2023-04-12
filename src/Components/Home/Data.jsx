import React from "react";
import { MapPinIcon, ShareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Data = ({ data, handleViewDetails }) => {
  const {
    id,
    image,
    company,
    job_description,
    job_post,
    job_type,
    job_location,
    location,
    salary,
  } = data;
  // console.log(data);
  return (
    <div className="border border-spacing-3 border-gray-200 rounded-sm p-8 md:block grid place-content-center">
      <img src={image} alt="" className="w-[150px] h-[45px] mb-5" />
      <h2 className="text-2xl text-gray-700 mb-1">{job_post}</h2>
      <p className="text-gray-400 my-1">{company}</p>
      <div className="flex space-x-2 mb-3">
        <span className="text-gradient border border-spacing-4 border-violet-700 rounded-sm px-3 py-2">
          {job_post}
        </span>
        <span className="text-gradient border border-spacing-4 border-violet-700 rounded-sm px-3 py-2">
          {job_location}
        </span>
      </div>
      <div className="mb-2 flex">
        <span className="flex mr-5">
          <MapPinIcon className="h-4 w-4 mr-2 text-gray-400 flex items-center justify-center" />
          <p className="text-gray-400">{location}</p>
        </span>
        <span className="flex">
          <ShareIcon className="h-4 w-4 mr-2 text-gray-400 flex items-center justify-center" />
          <p className="text-gray-400">Salary:{salary}</p>
        </span>
      </div>
      <Link to={`/job/${data.id}`}>
        <button onClick={() => handleViewDetails(id)} className="btn">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Data;
