import { jobListSrvc, jobSearchSrvc } from "../../services/findJobSrvc";
import { activemodalAct } from "./homePageAct";

export const jobListStart = () => {
  return {
    type: "JOBLIST/START",
  };
};

export const jobListSuccess = (jobData) => {
  return {
    type: "JOBLIST/SUCCESS",
    payload: { jobData },
  };
};

export const jobListError = (errorMessage) => {
  return {
    type: "JOBLIST/ERROR",
    payload: { errorMessage },
  };
};

export const jobListAsync = () => {
  return (dispatch) => {
    dispatch(jobListStart());
    jobListSrvc()
      .then((response) => {
        console.log(response);
        dispatch(jobListSuccess(response.data.data));
        dispatch(activemodalAct(""));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(jobListError(error.message));
        dispatch(activemodalAct(""));
      });
  };
};

export const jobSearchStart = () => {
  return {
    type: "COMPANCOMPANYSEARCHYLIST/START",
  };
};

export const jobSearchSuccess = (jobData) => {
  return {
    type: "COMPANYSEARCH/SUCCESS",
    payload: { jobData },
  };
};

export const jobSearchError = (errorMessage) => {
  return {
    type: "COMPANYSEARCH/ERROR",
    payload: { errorMessage },
  };
};

export const jobSearchAsync = (queryparams) => {
  return (dispatch) => {
    dispatch(jobSearchStart());
    jobSearchSrvc(queryparams)
      .then((response) => {
        console.log(response);
        dispatch(jobListSuccess(response.data.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(jobSearchError(error.message));
      });
  };
};

// export const getDataByIDStart = () => {
//   return {
//     type: "GETDATABYID/START",
//   };
// };

// export const getDataByIDSuccess = (getDataByID) => {
//   return {
//     type: "GETDATABYID/SUCCESS",
//     payload: { getDataByID },
//   };
// };

// export const getDataByIDError = (errorMessage) => {
//   return {
//     type: "GETDATABYID/ERROR",
//     payload: { errorMessage },
//   };
// };

// export const getDataByIDAsync = (id) => {
//   return (dispatch) => {
//     dispatch(getDataByIDStart());
//     dispatch(getDataByIDSuccess(id));
//     // dispatch(getDataByIDError());
//   };
// };
