import React from "react";
import Introduction from "./Introduction";
import FeatureJobs from "./FeatureJobs";
import JobCategory from "./JobCategory";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const fakeData = useLoaderData();
  // console.log(fakeData);
  return (
    <section className="">
      <Introduction></Introduction>
      <JobCategory></JobCategory>
      <FeatureJobs fakeData={fakeData}></FeatureJobs>
    </section>
  );
};

export default Home;
