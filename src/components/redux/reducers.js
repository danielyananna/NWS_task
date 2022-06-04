import { combineReducers } from "redux";
import catReducer, { detailsReducer } from "./catReducer";

const reducers = combineReducers({
    allCats: catReducer,
    cat: detailsReducer,
});

export default reducers;