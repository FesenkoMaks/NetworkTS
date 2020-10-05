import {LoginAPI, SecurityAPI, UsersAPI} from "./Api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth : boolean
    captchaURL: any
}

let internalState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
}

export const authReducer = (state: DataType = internalState , action: any) => {
    debugger
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}


export const setCaptchaURL = (captchaURL: string) => ({type: SET_CAPTCHA_URL, payload: {captchaURL}})

export const getAuth = () => (dispatch: any) => {
   return  LoginAPI.getAuthMe().then(data => {
        if(data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setUserData(id, email, login, true))
        }
    });
}

export const login = (email: string, password: string, rememberMe: boolean = false, captcha: string) => (dispatch: any) => {
    LoginAPI.login(email, password, rememberMe, captcha).then(data => {
        if(data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setUserData(id, email, login, true))
        } if (data.resultCode === 10){
            debugger
            SecurityAPI.getCaptchaUrl().then(data => {
                debugger
                dispatch(setCaptchaURL(data.url))
            })
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

