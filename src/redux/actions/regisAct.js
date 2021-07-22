import { regisSrvc } from "../../services/regisSrvc";

export const regisStart = () => {
  return {
    type: "REGIS/START",
  };
};

export const regisSuccess = (firstName, lastName, email, roles, status) => {
  return {
    type: "REGIS/SUCCESS",
    payload: { firstName, lastName, email, roles, status },
  };
};

export const regisError = (errorMessage) => {
  return {
    type: "REGIS/ERROR",
    payload: { errorMessage },
  };
};

export const regisAsync = (firstName, lastName, email, password, roles) => {
  return (dispatch) => {
    dispatch(regisStart());
    regisSrvc(firstName, lastName, email, password, roles)
      .then((response) => {
        console.log(response);
        dispatch(
          regisSuccess(
            response.data.data.firstName,
            response.data.data.lastName,
            response.data.data.email,
            response.data.statuesText
          )
        );
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(regisError(error.message));
      });
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};
