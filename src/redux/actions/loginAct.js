export const loginAct = (email, fullname, profile_pic, token) => {
  return {
    type: "LOGIN",
    payload: { email, fullname, profile_pic, token },
  };
};
