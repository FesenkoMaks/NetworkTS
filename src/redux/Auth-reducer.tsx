import {LoginAPI, SecurityAPI, UsersAPI} from "./Api";
import {stopSubmit} from "redux-form";

//const

const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

//type

export type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth : boolean
    captchaURL: null | string
}

type setUserDataType = ReturnType<typeof setUserData>

type ActionType = setUserDataType

//initial state

let internalState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
}

//reducer

export const authReducer = (state: initialStateType = internalState , action: ActionType) => {
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

//AC

export const setCaptchaURL = (captchaURL: string) => ({type: SET_CAPTCHA_URL, payload: {captchaURL}})

//thunk

export const getAuth = () => (dispatch: any) => {
   return  LoginAPI.getAuthMe().then(data => {
        if(data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setUserData(id, true, email, login))
        }
    });
}

export const login = (email: string, password: string, rememberMe: boolean = false, captcha: string) => (dispatch: any) => {
    LoginAPI.login(email, password, rememberMe, captcha).then(data => {
        if(data.resultCode === 0) {
            let id = data.data.userId
            dispatch(setUserData(id,true))
        } if (data.resultCode === 10){
            SecurityAPI.getCaptchaUrl().then(data => {
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
            dispatch(setUserData(null, false, null, null))
        }
    });
}

//AC

export const setUserData = (id: number | null, isAuth: boolean, email?: string | null, login?: string | null) => ({type: SET_USER_DATA, payload: {id, isAuth, email, login}})
