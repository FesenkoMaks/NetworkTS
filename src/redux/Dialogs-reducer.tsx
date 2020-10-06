import {DialogsDataTypes, MessageType} from "./store";

//const

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPD_NEW_MESSAGE = 'UPD-NEW-MESSAGE'

//type

type actionCreatorAddNewMessageType = ReturnType<typeof actionCreatorAddNewMessage>
type ActionType = actionCreatorAddNewMessageType

//initial state

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
    ]
}

//reducer

export const dialogsReducer = (state: DialogsDataTypes = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: 7,
                message: action.messageText,
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageText: ''
            }
        }

        default:
            return state


    }
}

//AC

export const actionCreatorAddNewMessage = (messageText: string) => ({type: ADD_MESSAGE, messageText})

