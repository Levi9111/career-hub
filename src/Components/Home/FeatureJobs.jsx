import React, { useState } from "react";
import Data from "./Data";

const FeatureJobs = ({ fakeData }) => {
  const [state, setState] = useState(false);

  const handleViewDetails = (id) => {
    const targetElement = fakeData.find((data) => data.id === id);
  };

  const handleJobs = () => {
    setState(!state);
  };

  return (
    <div className="md:mx-40 mx:12 my-28 ">
      <h2 className="text-3xl font-bold text-center">Featured Jobs</h2>
      <p className="text-lg text-gray-700 text-center mb-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {state
          ? fakeData.map((data) => <Data key={data.id} data={data}></Data>)
          : fakeData
              .slice(0, 4)
              .map((data) => (
                <Data
                  key={data.id}
                  data={data}
                  handleViewDetails={handleViewDetails}
                ></Data>
              ))}
      </div>

      <div className="btn-container mt-7 flex justify-center">
        {state ? (
          <button className="btn" onClick={handleJobs}>
            Show Less
          </button>
        ) : (
          <button className="btn" onClick={handleJobs}>
            Show All Jobs
          </button>
        )}
        {/* <button className="btn" onClick={handleJobs}>
          {state ? "Show Less" : "Show All Jobs"}
        </button> */}
      </div>
    </div>
  );
};

export default FeatureJobs;
