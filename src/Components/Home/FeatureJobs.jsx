import React from "react";
import Data from "./Data";

const FeatureJobs = ({ fakeData }) => {
  return (
    <div className="md:mx-52 mx:12 my-28">
      <h2 className="text-3xl font-bold text-center">Featured Jobs</h2>
      <p className="text-lg text-gray-700 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fakeData.map((data) => (
          <Data key={data.id} data={data}></Data>
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
