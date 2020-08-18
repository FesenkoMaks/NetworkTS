import React from "react";
import {reduxForm, Field} from "redux-form";


function NewMessageForn(props: any) {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageText'}/>
            <button>Send</button>
        </form>
    )
}

let NewMessage = reduxForm({
    form: 'newMessage'
})(NewMessageForn)

export default NewMessage;