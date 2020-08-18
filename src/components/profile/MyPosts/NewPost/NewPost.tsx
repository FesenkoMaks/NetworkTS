import React from "react";
import s from './NewPost.module.css';
import {reduxForm, Field} from "redux-form";





let NewPostForm = (props: any) => {
    return (

            <form className={s.newpost} onSubmit={props.handleSubmit}>
                <Field component={'textarea'} name={'textNewMessage'}/>
                <button >Send</button>
            </form>

    )
}

let NewPost = reduxForm({
    form: 'newMessage'
})(NewPostForm)

export default NewPost;