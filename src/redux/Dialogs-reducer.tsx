import {DialogsDataTypes, MessageType} from "./store";


const ADD_MESSAGE = 'ADD-MESSAGE'
const UPD_NEW_MESSAGE ='UPD-NEW-MESSAGE'

let initialState = {
    messageData: [
        {message: 'Hi', id: 1},
        {message: 'Hiaffaf', id: 2},
        {message: 'Hafafaffai', id: 3},
        {message: 'fagaga', id: 4},
        {message: 'blr', id: 5},
    ],
    dialogsData: [
        {name: 'Anton', id: 1},
        {name: 'Ker4', id: 2},
        {name: 'Vlad', id: 3},
        {name: 'Gena', id: 4},
        {name: 'Putin', id: 5}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsDataTypes = initialState, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: 7,
                message: state.newMessageText,
            }
            return  {...state,
                messageData: [...state.messageData, newMessage],
                newMessageText: ''
            }
            
        }
        case UPD_NEW_MESSAGE:
            return  {...state,
                newMessageText: action.newTextMessage
            }

        default:
            return state


    }
}

    export const actionCreatorAddNewMessage = () => ({type: ADD_MESSAGE})

    export const actionCreatorOnMessageChange = (text: string | undefined) =>  ({type: UPD_NEW_MESSAGE, newTextMessage: text})

