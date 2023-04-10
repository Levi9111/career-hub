import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex">
      <Link to=" ">workWithLevi</Link>
      <div className="">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/appliedJobs">Applied Job</Link>
        <Link to="/blog">Blogs</Link>
      </div>

      <button>
        <Link>Start Applying</Link>
      </button>
    </div>
  );
};

export default Header;
