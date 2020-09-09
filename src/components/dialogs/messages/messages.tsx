import React from "react";
import s from './../Dialogs.module.css';


type MessagePropsType = {
    message: string
    id: number
}

const Message = ({message, ...props}:MessagePropsType) => {
    return(
    <div className={s.message}>
        {message}
    </div>
    )
}

type DataTypes = {messages: Array<{message: string, id: number}>}

function Messages({messages}:DataTypes) {

    let messagesElements = messages.map((m) => <Message message={m.message} id={m.id}/>)

    return (
            <div className={s.messages}>
                {messagesElements}
            </div>
    )
}

export default Messages;