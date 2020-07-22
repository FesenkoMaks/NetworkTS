import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./dialogItem/dialogItem";
import Messages from "./messages/messages";
import NewMessage from "./newMessage/newMessage";
import {DialogsType, MessageType, StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {actionCreatorAddNewMessage, actionCreatorOnMessageChange} from "../../redux/Dialogs-reducer";
import {connect} from "react-redux";



type PropsType = {
    store: StoreType
    // dialogsPage: any
    // addMessage: (textMessage:string) => void
    // updateNewMessage: (newText: string) => void
    // dispatch: (action:any) => void
}



let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addNewMessage: () => {
            dispatch(actionCreatorAddNewMessage())
        },

        onMessageChange: (text: string | undefined) => {
            dispatch(actionCreatorOnMessageChange(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;