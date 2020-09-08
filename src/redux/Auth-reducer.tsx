import {LoginAPI, UsersAPI} from "./Api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA'

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth : boolean
}

let internalState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}

export const authReducer = (state: DataType = internalState , action: any) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export const getAuth = () => (dispatch: any) => {
   return  LoginAPI.getAuthMe().then(data => {
        if(data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setUserData(id, email, login, true))
        }
    });
}

export const login = (email: string, password: string, rememberMe: boolean = false) => (dispatch: any) => {
    LoginAPI.login(email, password, rememberMe).then(data => {
        debugger
        if(data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setUserData(id, email, login, true))
        } else {
            if(data.messages){
                dispatch(stopSubmit('login', {_error: data.messages[0]}))
                } else {
                dispatch(stopSubmit('login', {_error: 'Error!'}))
            }

        }
    });
}

export const loginOut = () => (dispatch: any) => {
    LoginAPI.loginout().then(data => {
        if(data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    });
}

export const setUserData = (id: any, email: any, login: any, isAuth: any) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})

