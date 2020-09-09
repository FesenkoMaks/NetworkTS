import React from "react";
import s from './NewPost.module.css';
import {reduxForm} from "redux-form";
import {required} from "../../../../validators";
import {Textarea} from "../../../common/Textarea";
import {FiledCreator} from "../../../common/FiledCreator";


let NewPostForm = (props: any) => {
    return (

            <form className={s.newpost} onSubmit={props.handleSubmit}>
                <FiledCreator component={Textarea} name={'textNewMessage'} type={'text'} validate={[required]}/>
                <button >Send</button>
            </form>

    )
}

let NewPost = reduxForm({
    form: 'newMessage'
})(NewPostForm)

export default NewPost;