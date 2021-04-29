import { DEFAULT_TEXT } from "../default_values";

export default function textReducer(state = DEFAULT_TEXT, action){
    switch(action.type){
        case "text/changed":
            return action.text;
        default:
            return state;
    }
}