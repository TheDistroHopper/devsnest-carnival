const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      console.log("DELETE");
      return state.filter((item, index) => index !== action.payload);
    case "LOAD_TODOS":
      return action.payload.splice(0, 10);
    default:
      return state;
  }
};

export default todoReducer;
