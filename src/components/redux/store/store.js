import {createStore} from "redux";
import cartReducer from "../reducers/cartReducer";
import { combineReducers } from "redux";
import currencyReducer from "../reducers/currencyReducer";
import categoryReducer from "../reducers/categoryReducer";

const store = createStore(combineReducers({cartReducer,currencyReducer,categoryReducer}));

export default store;