import React from "react";
import Dialogs from "./Dialogs";
import {actionCreatorAddNewMessage} from "../../redux/Dialogs-reducer";
import {connect} from "react-redux";





let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addNewMessage: (messageText:string) => {
            dispatch(actionCreatorAddNewMessage(messageText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;