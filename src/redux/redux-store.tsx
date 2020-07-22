import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import { usersReducer } from "./Users-reducer";

let reducers = combineReducers({
    "myPostsPage" : profileReducer,
    "dialogsPage" : dialogsReducer,
    "usersPage": usersReducer
})

let store = createStore(reducers);

export default  store;