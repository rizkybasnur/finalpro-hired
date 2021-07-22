import { loginSrvc } from "../../services/loginSrvc";

export const loginStart = () => {
  return {
    type: "LOGIN/START",
  };
};

export const loginSuccess = (email, firstName, profile_pic, token) => {
  return {
    type: "LOGIN/SUCCESS",
    payload: { email, firstName, profile_pic, token },
  };
};

export const loginError = (errorMessage) => {
  return {
    type: "LOGIN/ERROR",
    payload: { errorMessage },
  };
};

export const loginAsync = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    const store = window.localStorage;
    loginSrvc(email, password)
      .then((response) => {
        console.log(response);
        store.setItem("token", response.data.data.token);
        store.setItem("email", response.data.data.email);
        store.setItem("firstName", response.data.data.firstName);
        store.setItem("profile_pic", response.data.data.profile_pic);
        dispatch(
          loginSuccess(
            response.data.data.email,
            response.data.data.firstName,
            response.data.data.profile_pic,
            response.data.data.token
          )
        );
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(loginError(error.message));
      });
  };
};
