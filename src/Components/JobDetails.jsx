import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Vector1 from "./../assets/All Images/Vector-1.png";
import Vector2 from "./../assets/All Images/Vector.png";

const JobDetails = () => {
  const jobs = useLoaderData();
  const params = useParams();

  const selectedData = jobs.fakeData?.find(
    (company) => company.id == params.Id
  );

  const {
    description,
    responsibilities,
    requirements,
    experience,
    salary,
    job_title,
    phone_number,
    full_address,
    address,
    email,
  } = selectedData;

  // console.log(selectedData);
  return (
    <div>
      <div className="">
        <div className="job-details-header h-64 bg-gray-100 text-center relative">
          <h2 className="text-2xl text-gray-600 font-bold pt-10 ">
            Job Details
          </h2>
          <img src={Vector1} alt="" className="absolute top-0 right-0" />
          <img src={Vector2} alt="" className="absolute bottom-0 left-0 " />
        </div>
        <div className="mx-44 grid md:grid-cols-2 gap-8 p-4">
          <div className="space-y-8">
            <p>
              <span className="font-bold">Job Description:</span>
              {description}
            </p>
            <p>
              <span className="font-bold">Responsibilities:</span>
              {responsibilities}
            </p>
            <p>
              <div className="font-bold">Educational Requirements:</div>
              {requirements}
            </p>
            <p>
              <div className="font-bold">Experience:</div>
              {experience}
            </p>
          </div>
          <div className=" bg-gray-300 p-3 rounded-md relative">
            <div className="footer-border pb-3 mb-3">
              <h4 className="text-2xl font-semibold">Job Details</h4>
            </div>
            <p>
              <span className="font-bold">Salary: </span>
              {salary}
            </p>
            <p>
              <span className="font-bold">Job Title: </span>
              {job_title}
            </p>
            <div className="footer-border pb-3 mb-3">
              <h4 className="text-2xl font-semibold">Contact Info:</h4>
            </div>
            <p>
              <span className="font-bold">Phone Number: </span>
              {phone_number}
            </p>
            <p>
              <span className="font-bold">Email: </span>
              {email}
            </p>
            <p>
              <span className="font-bold">Full Address:</span>
              {full_address}
            </p>
            <Link to="/appliedJobs">
              <button
                style={{ width: "95%" }}
                className="btn absolute bottom-4"
              >
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
