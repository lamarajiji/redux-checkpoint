import {combineReducers  } from "redux";
import TaskReducer from "./ListTasks";
const rootReducer=combineReducers({task:TaskReducer});
export default rootReducer