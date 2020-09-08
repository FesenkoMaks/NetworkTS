import React from "react";
import s from './NewPost.module.css';
import {reduxForm, Field} from "redux-form";
import {required} from "../../../../validators";
import {Textarea} from "../../../common/Textarea";





let NewPostForm = (props: any) => {
    return (

            <form className={s.newpost} onSubmit={props.handleSubmit}>
                <Field
                    component={Textarea}
                    name={'textNewMessage'}
                    validate={[required]}
                />
                <button >Send</button>
            </form>

    )
}

let NewPost = reduxForm({
    form: 'newMessage'
})(NewPostForm)

export default NewPost;