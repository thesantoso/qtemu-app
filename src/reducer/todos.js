import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, UPDATE_TODO } from "../constants";

const initialState = {
  todos: [
    { id: 1, task: "Wake Up", completed: false }
  ]
}

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        task: action.payload,
        completed: false
      }
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos
      }
    case DELETE_TODO:
      const filterTodo = state.todos.filter((x) => x.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodo
      }
    case UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.updatedTodo }
        }
        return todo
      })
      return {
        ...state,
        todos: updatedTodos
      }
    case COMPLETE_TODO:
      const toggleTodos = state.todos.map((x) =>
        x.id === action.payload.id ?
          { ...action.payload, completed: !action.payload.completed }
          : x)
      return {
        ...state,
        todos: toggleTodos,
      };

    default:
      return state
  }
}

export default todosReducer;
