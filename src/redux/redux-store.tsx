import {combineReducers, createStore, applyMiddleware} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import { usersReducer } from "./Users-reducer";
import {authReducer} from "./Auth-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./App-reducer";


let reducers = combineReducers({
    "myPostsPage" : profileReducer,
    "dialogsPage" : dialogsReducer,
    "usersPage": usersReducer,
    "auth": authReducer,
    "form": formReducer,
    "profile": profileReducer,
    "app": appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));



export default  store;