import React from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";


type PropsType = {
    newPostText : string
    posts:  Array<PostType>
    postChange: (text: string | undefined) => void
    addPost: () => void
    // addPost: (value: string) => void
    // updateNewPostMessage: (newText: string) => void
    // dispatch: (action:any) => void
}

function MyPosts(props:PropsType) {


    let postsElement = props.posts.map((p) => <Post text={p.text} like={p.like}/>)

    return (
        <div>
            <div className={s.text}>My Posts</div>
            <NewPost
                postChange={props.postChange}
                newPostText={props.newPostText}
                addPost={props.addPost}
            />
            {postsElement}
        </div>
    )
}

export default MyPosts;