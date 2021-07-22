const initialState = {
  // getDataByID: {},
  jobData: [],
  loading: false,
  error: false,
  error_message: "",
};

const findJobRed = (state = initialState, action) => {
  switch (action.type) {
    case "JOBLIST/START":
      return {
        ...state,
        loading: true,
      };
    case "JOBLIST/SUCCESS":
      return {
        ...state,
        jobData: action.payload.jobData,
        loading: false,
      };

    case "JOBLIST/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        error_message: action.payload.errorMessage,
      };
    case "JOBSEARCH/START":
      return {
        ...state,
        loading: true,
      };
    case "JOBSEARCH/SUCCESS":
      return {
        ...state,
        companyData: action.payload.jobData,
        loading: false,
      };
    case "JOBSEARCH/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        error_message: action.payload.errorMessage,
      };
    // case "GETDATABYID/START":
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case "GETDATABYID/SUCCESS":
    //   return {
    //     ...state,
    //     getDataByID:
    //       state.jobData &&
    //       state.jobData.find((item) => item._id === action.payload.getDataByID),
    //     loading: false,
    //   };
    // case "GETDATABYID/ERROR":
    //   return {
    //     ...state,
    //     loading: false,
    //     error: true,
    //     error_message: action.payload.errorMessage,
    //   };
    default:
      return { ...state };
  }
};

export default findJobRed;
