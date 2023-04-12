const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getData = async () => {
  const fakeData = await fetchData("/fakeDb.json");
  const fakeCategory = await fetchData("/fakeCategory.json");
  // console.log(fakeData, fakeCategory);
  return { fakeData, fakeCategory };
};

export { getData, fetchData };
