export const regisAct = (roles, firstname, lastname, email, password) => {
  return {
    type: "REGIS",
    payload: {
      roles,
      firstname,
      lastname,
      email,
      password,
    },
  };
};
