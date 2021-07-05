import axios from "axios";

export const loginSrvc = async (email, password) => {
  const url = "https://tutorins.herokuapp.com/api/v1/tutor/login";
  const data = {
    email,
    password,
  };
  const response = await axios.post(url, data);
  console.log("response axios", response);
  return response;
};
