import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BeakerIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [state, setState] = useState(false);

  const handleOnClick = () => {
    setState(!state);
  };

  return (
    <div
      className={`md:flex block items-center justify-between ${
        state ? "h-64" : "h-20"
      } md:h-20  md:mx-40 mx-3 relative`}
    >
      <Link
        to=" "
        className={`text-3xl text-gray-800 font-bold 
         `}
      >
        workWithLevi
      </Link>

      {/* header links */}
      <div
        className={`md:flex w-1/2 md:justify-between md:flex-row flex-col mx-auto md:p-0 p-6  text-start space-y-7 md:space-y-0 ${
          state ? "block" : "hidden"
        }`}
      >
        <div className="md:space-x-6 space-x-0 text-[#757575] flex md:flex-row flex-col text-start space-y-2 md:space-y-0">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/appliedJobs">Applied Job</Link>
          <Link to="/blog">Blogs</Link>
        </div>

        <button>
          <Link to="#" className="btn">
            Start Applying
          </Link>
        </button>
      </div>
      <button
        onClick={handleOnClick}
        className="md:hidden block absolute right-0 top-8"
      >
        {state ? (
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default Header;
