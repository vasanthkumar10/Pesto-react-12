export const INITIAL_STATE = {
  count: 0,
  input: 0,
};

export const reducer = (state = INITIAL_STATE, action) => {
  //   console.log("state", state, "action", action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.value };
    case "DECREMENT":
      return { ...state, count: state.count - action.value };
    case "RESET":
      return INITIAL_STATE;
    case "INPUT":
      return { ...state, input: action.value };
    default:
      return state;
  }
};
