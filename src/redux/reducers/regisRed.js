const initialState = {
  roles: null,
  firstname: null,
  lastname: null,
  email: null,
  password: null,
};

const regisRed = (state = initialState, action) => {
  switch (action.type) {
    case "REGIS":
      return {
        ...state,
        roles: action.payload.roles,
        firstname: action.payload.name,
        lastname: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }
};

export default regisRed;
