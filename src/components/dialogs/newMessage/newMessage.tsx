import React from "react";
import { actionCreatorAddNewMessage, actionCreatorOnMessageChange } from "../../../redux/Dialogs-reducer";



type NewMessagePropsType = {
    // addMessage: (textMessage:string) => void
    // updateNewMessage: (neText:string) => void
    newMessageText: string
    // dispatch: (action:any) => void
    addNewMessage:() => void
    onMessageChange:(text: string | undefined) => void
}


function NewMessage(props:NewMessagePropsType) {

    let newTextChange = React.createRef<HTMLTextAreaElement>()


    let addNewMessage = () => {
        props.addNewMessage()
    }

    let onMessageChange = () => {
        let text = newTextChange.current?.value
        props.onMessageChange(text)


    }



    return (
           <div>
              <textarea
                  ref={newTextChange}
                  value={props.newMessageText}
                  onChange={onMessageChange}
              />
               <button onClick={addNewMessage}>Send</button>
           </div>
              )
}

export default NewMessage;