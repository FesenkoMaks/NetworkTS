import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./dialogItem/dialogItem";
import Messages from "./messages/messages";
import NewMessage from "./newMessage/newMessage";



type PropsType = {
    addNewMessage:(messageText: string) => void
    dialogsPage: any
}

function Dialogs(props:PropsType) {

    let onSobmitNewMessage = (formData:any) => {
        props.addNewMessage(formData.newMessageText)
    }

    return (
        <div className={s.dialogs}>
           <DialogsItem dialogs={props.dialogsPage.dialogsData}/>
           <Messages messages={props.dialogsPage.messageData}/>
           <NewMessage onSubmit={onSobmitNewMessage}/>
        </div>
    )
}

export default Dialogs;