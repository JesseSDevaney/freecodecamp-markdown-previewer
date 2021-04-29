import { combineReducers } from "redux";
import textReducer from "./textReducer";
import viewModeReducer from "./viewModeReducer";

export default combineReducers({
    text: textReducer,
    viewMode: viewModeReducer
});