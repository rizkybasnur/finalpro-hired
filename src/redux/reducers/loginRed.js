const store = window.localStorage;
const firstname = store.getItem("firstName") || "";
const profile_pic = store.getItem("profile_pic") || "";
const token = store.getItem("token") || "";
const email = store.getItem("email") || "";

const initialState = {
  email: email,
  firstname: firstname,
  profile_pic: profile_pic,
  token: token,
  loading: false,
  error: false,
  error_message: "",
};

const loginRed = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN/START":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN/SUCCESS":
      return {
        ...state,
        email: action.payload.email,
        firstname: action.payload.firstName,
        profile_pic: action.payload.profile_pic,
        token: action.payload.token,
        loading: false,
      };
    case "LOGIN/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        error_message: action.payload.errorMessage,
      };
    default:
      return { ...state };
  }
};

export default loginRed;
