export const DefaultReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADD":
      return {
        ...state,
        isAdded: true,
      };
    case "SET-REMOVE":
      return {
        ...state,
        isRemoved: false,
      };
  }

  console.log(state);
};
