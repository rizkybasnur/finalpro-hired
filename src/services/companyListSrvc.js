import axios from "axios";

export const companyListSrvc = async () => {
  const url = "https://hired-api.herokuapp.com/api/company/";
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};

export const companySearchSrvc = async (queryparams) => {
  const url = `https://hired-api.herokuapp.com/api/company/search?${queryparams}`;
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};

export const companyIdsrvc = async () => {
  const url = `https://hired-api.herokuapp.com/api/industry_categories/`;
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};
