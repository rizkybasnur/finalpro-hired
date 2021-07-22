const initialState = {
  // getCompanyByID: {},
  companyData: null,
  loading: false,
  error: false,
  error_message: "",
};

const companyListRed = (state = initialState, action) => {
  switch (action.type) {
    case "COMPANYLIST/START":
      return {
        ...state,
        loading: true,
      };
    case "COMPANYLIST/SUCCESS":
      return {
        ...state,
        companyData: action.payload.companyData,
        loading: false,
      };

    case "COMPANYLIST/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        error_message: action.payload.errorMessage,
      };
    case "COMPANYSEARCH/START":
      return {
        ...state,
        loading: true,
      };
    case "COMPANYSEARCH/SUCCESS":
      return {
        ...state,
        companyData: action.payload.companyData,
        loading: false,
      };
    case "COMPANYSEARCH/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        error_message: action.payload.errorMessage,
      };
    // case "GETCOMPANYBYID/START":
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case "GETCOMPANYBYID/SUCCESS":
    //   return {
    //     ...state,
    //     getCompanyByID: state.companyData.find(
    //       (item) => item._id === action.payload.getCompanyByID
    //     ),
    //     loading: false,
    //   };

    // case "GETCOMPANYBYID/ERROR":
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

export default companyListRed;
