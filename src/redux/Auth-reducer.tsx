

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
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setUserData = (id: any, email: any, login: any) => ({type: SET_USER_DATA, data: {id, email, login}})

