import React from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";


type PropsType = {
    posts:  Array<PostType>
    addPost: (newPost: string) => void
}

function MyPosts(props:PropsType) {
    let onSubmitNewPost = (formData: any) => {
        props.addPost(formData.textNewMessage)
    }


    let postsElement = props.posts.map((p) => <Post text={p.text} like={p.like}/>)

    return (
        <div>
            <div className={s.text}>My Posts</div>
            <NewPost onSubmit={onSubmitNewPost}/>
            {postsElement}
        </div>
    )
}

export default MyPosts;