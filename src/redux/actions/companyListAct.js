import {
  companyListSrvc,
  companySearchSrvc,
} from "../../services/companyListSrvc";

export const companyListStart = () => {
  return {
    type: "COMPANYLIST/START",
  };
};

export const companyListSuccess = (companyData) => {
  return {
    type: "COMPANYLIST/SUCCESS",
    payload: { companyData },
  };
};

export const companyListError = (errorMessage) => {
  return {
    type: "COMPANYLIST/ERROR",
    payload: { errorMessage },
  };
};

export const companyListAsync = () => {
  return (dispatch) => {
    dispatch(companyListStart());
    companyListSrvc()
      .then((response) => {
        console.log(response);
        dispatch(companyListSuccess(response.data.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(companyListError(error.message));
      });
  };
};

export const companySearchStart = () => {
  return {
    type: "COMPANCOMPANYSEARCHYLIST/START",
  };
};

export const companySearchSuccess = (companyData) => {
  return {
    type: "COMPANYSEARCH/SUCCESS",
    payload: { companyData },
  };
};

export const companySearchError = (errorMessage) => {
  return {
    type: "COMPANYSEARCH/ERROR",
    payload: { errorMessage },
  };
};

export const companySearchAsync = (queryparams) => {
  return (dispatch) => {
    dispatch(companySearchStart());
    companySearchSrvc(queryparams)
      .then((response) => {
        console.log(response);
        dispatch(companySearchSuccess(response.data.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(companySearchError(error.message));
      });
  };
};

// export const getCompanyByIDStart = () => {
//   return {
//     type: "GETCOMPANYBYID/START",
//   };
// };

// export const getCompanyByIDSuccess = (getCompanyByID) => {
//   return {
//     type: "GETCOMPANYBYID/SUCCESS",
//     payload: { getCompanyByID },
//   };
// };

// export const getCompanyByIDError = (errorMessage) => {
//   return {
//     type: "GETCOMPANYBYID/ERROR",
//     payload: { errorMessage },
//   };
// };
