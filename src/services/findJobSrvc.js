import axios from "axios";

export const jobListSrvc = async () => {
  const url = "https://hired-api.herokuapp.com/api/job-details";
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};

export const jobSearchSrvc = async (queryparams) => {
  const url = `https://hired-api.herokuapp.com/api/findJobs?${queryparams}`;
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};
