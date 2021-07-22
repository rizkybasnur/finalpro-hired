import axios from "axios";

export const topCompanySrvc = async () => {
  const url = "https://hired-api.herokuapp.com/api/job-lists";
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};

export const featureJobSrvc = async () => {
  const url = "https://hired-api.herokuapp.com/api/job-lists";
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};
