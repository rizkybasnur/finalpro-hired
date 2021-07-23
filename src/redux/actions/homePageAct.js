import { featureJobSrvc, topCompanySrvc } from "../../services/homePageSrvc";
export const topCompanyStart = () => {
  return {
    type: "TOPCOMPANY/START",
  };
};
export const topCompanySuccess = (companyData) => {
  return {
    type: "TOPCOMPANY/SUCCESS",
    payload: { companyData },
  };
};
export const topCompanyError = () => {
  return {
    type: "TOPCOMPANY/ERROR",
  };
};

export const topCompanyAsync = () => {
  return (dispatch) => {
    dispatch(topCompanyStart());

    topCompanySrvc()
      .then((response) => {
        console.log(response);
        dispatch(topCompanySuccess(response.data.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(topCompanyError(error.message));
      });
  };
};

export const featureJobStart = () => {
  return {
    type: "FEATUREJOB/START",
  };
};
export const featureJobSuccess = (companyData) => {
  return {
    type: "FEATUREJOB/SUCCESS",
    payload: { companyData },
  };
};
export const featureJobError = (error_message) => {
  return {
    type: "FEATUREJOB/ERROR",
    payload: { error_message },
  };
};

export const featureJobAsync = () => {
  return (dispatch) => {
    dispatch(featureJobStart());

    featureJobSrvc()
      .then((response) => {
        console.log(response);
        dispatch(featureJobSuccess(response.data.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(featureJobError(error.message));
      });
  };
};

export const activemodalAct = (activemodal) => {
  return {
    type: "ACTIVEMODAL",
    payload: { activemodal },
  };
};
