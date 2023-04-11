import React from "react";
import Account from "./../../assets/Icons/accounts 1.png";
import Business from "./../../assets/Icons/business 1.png";
import Chip from "./../../assets/Icons/chip 1.png";
import Social_media from "./../../assets/Icons/social-media 1.png";

const FeatureJobs = () => {
  return (
    <div className="md:mx-52 mx:12 my-28">
      <h2 className="text-3xl font-bold text-center">Featured Jobs</h2>
      <p className="text-lg text-gray-700 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-4 md:p-1 p-3  gap-5 mt-6">
        {/* cards */}

        <div className="card bg-gray-100 rounded-md p-4">
          <div className="w-16 h-16 p-3 bg-gray-300 rounded-lg mb-3">
            <img src={Account} alt="" className="w-full" />
          </div>
          <h3 className="text-xl text-gray-700">Account and Finance</h3>
          <p className="text-gray-500">300 jobs available</p>
        </div>

        <div className="card bg-gray-100 rounded-md p-4">
          <div className="w-16 h-16 p-3 bg-gray-300 rounded-lg mb-3">
            <img src={Business} alt="" className="w-full" />
          </div>
          <h3 className="text-xl text-gray-700">Creative Design</h3>
          <p className="text-gray-500">100+ jobs available</p>
        </div>

        <div className="card bg-gray-100 rounded-md p-4">
          <div className="w-16 h-16 p-3 bg-gray-300 rounded-lg mb-3">
            <img src={Chip} alt="" className="w-full" />
          </div>
          <h3 className="text-xl text-gray-700">Engeering Job</h3>
          <p className="text-gray-500">224 jobs available</p>
        </div>

        <div className="card bg-gray-100 rounded-md p-4">
          <div className="w-16 h-16 p-3 bg-gray-300 rounded-lg mb-3">
            <img src={Social_media} alt="" className="w-full" />
          </div>
          <h3 className="text-xl text-gray-700">Marketing & Sales</h3>
          <p className="text-gray-500">150 jobs available</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobs;
