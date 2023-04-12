const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getData = async () => {
  const fakeData = await fetchData("/fakeDb.json");
  const fakeCategory = await fetchData("/fakeCategory.json");
  console.log(fakeData, fakeCategory);
  return { fakeData, fakeCategory };
};

const jobdetails = async ({ params }) => {
  // const jobsData = await fetchData("/fakeDbDescription.json");
  // const { jobs } = jobsData;
  // console.log(jobsData, jobs);
  // const job = jobs.find((job) => `${job.id}` === params.id);
  // console.log(job);
  // return job;
};

export { getData, fetchData, jobdetails };
