import {combineReducers, createStore, applyMiddleware} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import { usersReducer } from "./Users-reducer";
import {authReducer} from "./Auth-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./App-reducer";


let rootReducer = combineReducers({
    "myPostsPage" : profileReducer,
    "dialogsPage" : dialogsReducer,
    "usersPage": usersReducer,
    "auth": authReducer,
    "form": formReducer,
    "app": appReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export default  store;