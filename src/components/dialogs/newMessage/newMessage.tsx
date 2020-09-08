import React from "react";
import {reduxForm, Field} from "redux-form";
import {Textarea} from "../../common/Textarea";
import {maxLengthCreator, required} from "../../../validators";

let maxLength: any = maxLengthCreator(2)

function NewMessageForm(props: any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'newMessageText'}
                validate={[required, maxLength]}
            />
            <button>Send</button>
        </form>
    )
}

let NewMessage = reduxForm({
    form: 'newMessage'
})(NewMessageForm)

export default NewMessage;