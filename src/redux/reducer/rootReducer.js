import { combineReducers } from "redux";
import listProductReducer from "./listProductReducer";
import shoppingReducer from "./shoppingReducer";

const rootReducer = combineReducers({
    listProductReducer,
    shoppingReducer,
});

export default rootReducer