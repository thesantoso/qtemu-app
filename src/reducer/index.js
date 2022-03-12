import { combineReducers } from "redux";
import todosReducer from "./todos";
import eventsReducer from "./events";

const reducer = combineReducers({todos:todosReducer, events:eventsReducer});

export default reducer;
