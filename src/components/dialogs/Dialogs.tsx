import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./dialogItem/dialogItem";
import Messages from "./messages/messages";
import NewMessage from "./newMessage/newMessage";
import { DialogsType, MessageType } from "../../redux/store";



type PropsType = {
    addNewMessage:() => void
    onMessageChange:(text: string | undefined) => void
    dialogsPage: any
    // addMessage: (textMessage:string) => void
    // updateNewMessage: (newText: string) => void
    // dispatch: (action:any) => void
}

function Dialogs(props:PropsType) {
    return (
        <div className={s.dialogs}>
           <DialogsItem dialogs={props.dialogsPage.dialogsData}/>
           <Messages messages={props.dialogsPage.messageData}/>
           <NewMessage addNewMessage={props.addNewMessage} onMessageChange={props.onMessageChange} newMessageText={props.dialogsPage.newMessageText}/>
        </div>
    )
}

export default Dialogs;