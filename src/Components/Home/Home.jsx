import React from "react";
import Introduction from "./Introduction";
import FeatureJobs from "./FeatureJobs";
import JobCategory from "./JobCategory";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { fakeData, fakeCategory } = useLoaderData();
  return (
    <section className="">
      <Introduction></Introduction>
      <JobCategory fakeCategory={fakeCategory}></JobCategory>
      <FeatureJobs fakeData={fakeData}></FeatureJobs>
    </section>
  );
};

export default Home;
