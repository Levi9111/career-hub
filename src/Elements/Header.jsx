import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between h-20 mx-52">
      <Link to=" " className="text-3xl text-gray-800 font-bold">
        workWithLevi
      </Link>

      {/* header links */}
      <div className="space-x-6 text-[#757575]">
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
  );
};

export default Header;
