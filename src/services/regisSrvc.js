import axios from "axios";

export const regisSrvc = async (role, firstname, lastname, email, password) => {
  const url = "";
  const data = {
    role,
    firstname,
    lastname,
    email,
    password,
  };
  const response = await axios.post(url, data);
  console.log("response axios", response);
  return response;
};
