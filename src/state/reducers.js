export const DefaultReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "SET_REMOVE":
      return {
        ...state,
        isRemoved: false,
      };
    case "SET_TODO_COMPLETED":
      return {
        ...state,
        todos: state?.todos?.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    default:
      return state;
  }
};
