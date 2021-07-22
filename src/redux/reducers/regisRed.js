const initialState = {
  firstname: null,
  lastname: null,
  email: null,
  roles: null,
  loading: false,
  error: false,
  error_message: "",
  status: "",
};

const regisRed = (state = initialState, action) => {
  switch (action.type) {
    case "REGIS/START":
      return {
        ...state,
        loading: true,
      };
    case "REGIS/SUCCESS":
      return {
        ...state,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        roles: action.payload.roles,
        status: action.payload.status,
        loading: false,
      };
    case "REGIS/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        error_message: action.payload.errorMessage,
      };
    case "CLEAR":
      return {
        ...state,
        roles: "",
      };
    default:
      return { ...state };
  }
};

export default regisRed;
