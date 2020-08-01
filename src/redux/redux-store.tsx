import {combineReducers, createStore, applyMiddleware} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import { usersReducer } from "./Users-reducer";
import {authReducer} from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    "myPostsPage" : profileReducer,
    "dialogsPage" : dialogsReducer,
    "usersPage": usersReducer,
    "auth": authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));



export default  store;