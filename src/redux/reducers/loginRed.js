const store = window.localStorage;
const fullname = store.getItem("fullname") || "";
const profile_pic = store.getItem("profile_pic") || "";
const token = store.getItem("token") || "";
const email = store.getItem("email") || "";

const initialState = {
  email: email,
  fullname: fullname,
  profile_pic: profile_pic,
  token: token,
};

const loginRed = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.payload.email,
        fullname: action.payload.fullname,
        profile_pic: action.payload.profile_pic,
        token: action.payload.token,
      };
    default:
      return { ...state };
  }
};

export default loginRed;
