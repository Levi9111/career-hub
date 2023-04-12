import React from "react";
import Vector1 from "./../assets/All Images/Vector-1.png";
import Vector2 from "./../assets/All Images/Vector.png";

const AppliedJobs = () => {
  return (
    <div>
      <div className="job-details-header h-64 bg-gray-100 text-center relative">
        <h2 className="text-2xl text-gray-600 font-bold pt-10 ">
          Applied Jobs
        </h2>
        <img src={Vector1} alt="" className="absolute top-0 right-0" />
        <img src={Vector2} alt="" className="absolute bottom-0 left-0 " />
      </div>
    </div>
  );
};

export default AppliedJobs;
