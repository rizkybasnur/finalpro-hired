import axios from "axios";

export const loginSrvc = async (email, password) => {
  const url = "https://hired-api.herokuapp.com/api/login/candidate";
  const data = {
    email,
    password,
  };
  const response = await axios.post(url, data);
  console.log("response axios", response);
  return response;
};

// const onClick = () =>{
//   dispatch(postApi).....
//   jobId
//   userId
// }
