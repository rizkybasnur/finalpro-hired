import { filterjobSrvc } from "../../services/filterjobSrvc";
export const filterjobStart = () => {
  return {
    type: "FILTERJOB/START",
  };
};
export const filterjobSuccess = (filteredJobs) => {
  return {
    type: "FILTERJOB/SUCCESS",
    payload: { filteredJobs },
  };
};
export const filterjobError = () => {
  return {
    type: "FILTERJOB/ERROR",
  };
};
export const filterjobChangeCategoryStart = (industry_categories) => {
  return {
    type: "FILTERJOBCHANGECATEGORY/START",
    payload: { industry_categories },
  };
};

export const filterjobAsync = () => {
  return (dispatch) => {
    dispatch(filterjobStart());

    filterjobSrvc()
      .then((response) => {
        console.log(response);
        dispatch(filterjobSuccess(response.data.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(filterjobError(error.message));
      });
  };
};

export const filterjobChangeCategory = (industry_categories) => {
  return (dispatch) => {
    dispatch(filterjobChangeCategoryStart(industry_categories));
  };
};
