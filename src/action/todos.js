import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, UPDATE_TODO } from "../constants";

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });
export const completeTodo = (payload) => ({ type: COMPLETE_TODO, payload });
