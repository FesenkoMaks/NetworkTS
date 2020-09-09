import {getAuth} from "./Auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

export type DataType = {
    initialized: boolean
}

let internalState = {
    initialized: false
}

export const appReducer = (state: DataType = internalState , action: any) => {
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



export const setInitialized = () => ({type: SET_INITIALIZED})

export const initializedApp = () => (dispatch: any) => {
    let promise = dispatch(getAuth())
    Promise.all([promise]).then(
        dispatch(setInitialized())
    )

}

