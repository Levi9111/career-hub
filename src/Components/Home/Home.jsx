import React from "react";
import Introduction from "./Introduction";
import FeatureJobs from "./FeatureJobs";
import JobCategory from "./JobCategory";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { fakeData, fakeDescription } = useLoaderData();
  return (
    <section className="">
      <Introduction></Introduction>
      <JobCategory></JobCategory>
      <FeatureJobs
        fakeData={fakeData}
        fakeDescription={fakeDescription}
      ></FeatureJobs>
    </section>
  );
};

export default Home;
