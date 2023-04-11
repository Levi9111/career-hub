import React from "react";
import Person from "./../../assets/All Images/P3OLGJ1 copy 1.png";

const Introduction = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex md:flex-row flex-col md:mx-52 mx-12">
        <div className="my-12 md:text-start text-center">
          <h3 className="text-6xl text-black font-semibold">
            One Step closer To Your
            <span className="text-gradient">Dream Job</span>
          </h3>
          <p className="text-xl text-[#757575] mt-3">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn mt-4">Get started</button>
        </div>
        <img src={Person} alt="" className="w-[400px]" />
      </div>
    </div>
  );
};

export default Introduction;
