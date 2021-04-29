import { DEFAULT_VIEW } from "../default_values";

export default function viewModeReducer(state = DEFAULT_VIEW, action){
    switch(action.type){
        case "viewMode/changed":
            return state === "editor" ? "preview" : "editor";
        default:
            return state;
    }
}