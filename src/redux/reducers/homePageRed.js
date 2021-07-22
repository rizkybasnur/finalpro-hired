const initialState = {
  companyData: [],
  loading: false,
  error: false,
  error_message: "",
};
const homePageRed = (state = initialState, action) => {
  switch (action.type) {
    case "TOPCOMPANY/START":
      return {
        ...state,
        loading: true,
      };
    case "TOPCOMPANY/SUCCESS":
      return {
        ...state,
        companyData: action.payload.companyData,
        loading: false,
      };
    case "TOPCOMPANY/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        // error_message: action.payload.error_message,
      };

    case "FEATUREJOB/START":
      return {
        ...state,
        loading: true,
      };
    case "FEATUREJOB/SUCCESS":
      return {
        ...state,
        companyData: action.payload.companyData,
        loading: false,
      };
    case "FEATUREJOB/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        error_message: action.payload.error_message,
      };

    default:
      return { ...state };
  }
};

export default homePageRed;
