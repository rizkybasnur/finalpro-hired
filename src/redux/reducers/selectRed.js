const initialState = {
  select: [],
};

const selectRed = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT":
      return {
        ...state,
        select: action.payload,
      };
    default:
      return { ...state };
  }
};

export default selectRed;
