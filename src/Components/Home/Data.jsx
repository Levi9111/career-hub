import React from "react";
import { BeakerIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Data = ({ data }) => {
  const {
    id,
    image,
    company,
    job_description,
    job_post,
    job_type,
    job_location,
    location,
  } = data;
  console.log(data);
  return (
    <div className="border border-spacing-3 border-gray-200 rounded-sm p-8">
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
        <MapPinIcon className="h-4 w-4 mr-2 text-gray-400 flex items-center justify-center" />
        <p className="text-gray-400">{location}</p>
      </div>
      <button className="btn">View Details</button>
    </div>
  );
};

export default Data;