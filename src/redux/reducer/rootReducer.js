import { combineReducers } from "redux";
import listProductReducer from "./listProductReducer";

const rootReducer = combineReducers({
    listProductReducer,
});

export default rootReducer