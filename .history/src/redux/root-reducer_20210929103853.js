import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import 

export default combineReducers({
    user:userReducer
})