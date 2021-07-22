import axios from "axios";

export const regisSrvc = async (firstName, lastName, email, password, role) => {
  const url = "https://hired-api.herokuapp.com/api/user/register";
  const data = {
    firstName,
    lastName,
    email,
    password,
    role,
  };
  const response = await axios.post(url, data);
  console.log("response axios", response);
  return response;
};
