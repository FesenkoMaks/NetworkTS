import {getAuth} from "./Auth-reducer";

//const

const SET_INITIALIZED = 'SET_INITIALIZED'

//type

export type DataType = {
    initialized: boolean
}

type setInitializedType = ReturnType<typeof setInitialized>

type ActionType = setInitializedType

//initial state

let internalState = {
    initialized: false
}

//reducer

export const appReducer = (state: DataType = internalState , action: ActionType) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

//AC

export const setInitialized = () => ({type: SET_INITIALIZED})

//thunk

export const initializedApp = () => (dispatch: any) => {
    let promise = dispatch(getAuth())
    Promise.all([promise]).then(
        dispatch(setInitialized())
    )
}

