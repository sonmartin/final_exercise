import * as types from "../../../action/actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };

    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case types.DELETE_TODO_SUCCESS:
      const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodo,
      };
    case types.EDIT_TODO_SUCCESS:
      const todoSave = [...state.todos].find(
        (todo) => todo.id === action.payload.id
      );
      todoSave.title = action.payload.title;
      return {
        ...state,
        todos: [...state.todos],
      };

    case types.COMPLETE_TODO_SUCCESS:
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, status: action.payload.status }
          : t
      );

      return {
        ...state,
        todos: toggleTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
