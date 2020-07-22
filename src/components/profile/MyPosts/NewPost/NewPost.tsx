import React from "react";
import s from './NewPost.module.css';
import {actionCreatorAddPost, actionCreatorOnPostChange} from "../../../../redux/Profile-reducer";



type AddPostType = {
    // addPost: (textPost: string) => void
    newPostText: string
    postChange: (text: string | undefined) => void
    addPost: () => void
    // updateNewPostMessage: (newText: string) => void
    // dispatch: (action:any) => void
}

function NewPost(props: AddPostType) {
    let NewPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = NewPostElement.current?.value
        props.postChange(text)

    }

    return (

            <div className={s.newpost}>
                <textarea ref={NewPostElement} value={props.newPostText} onChange={onPostChange}/>
                <button onClick={addPost}>Send</button>
            </div>

    )
}

export default NewPost;