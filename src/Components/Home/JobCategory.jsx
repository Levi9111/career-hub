import React from "react";

const FeatureJobs = ({ fakeCategory }) => {
  return (
    <div className="md:mx-40 mx:12 my-28">
      <h2 className="text-3xl font-bold text-center">Job Category List</h2>
      <p className="text-lg text-gray-700 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-4 md:p-1 p-3  gap-5 mt-6">
        {/* cards */}
        {fakeCategory.map((category) => {
          return (
            <div className="card bg-gray-100 rounded-md p-4">
              <div className="w-16 h-16 p-3 bg-gray-300 rounded-lg mb-3">
                <img src={category.logo} alt="" className="w-full" />
              </div>
              <h3 className="text-xl text-gray-700">{category.name}</h3>
              <p className="text-gray-500">{category.job}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureJobs;
