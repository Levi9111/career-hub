const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getData = async () => {
  const fakeData = await fetchData("/fakeDb.json");
  const fakeDescription = await fetchData("/fakeDbDescription.json");
  // console.log(fakeData, fakeDescription);
  return { fakeData, fakeDescription };
};

export { getData, fetchData };
