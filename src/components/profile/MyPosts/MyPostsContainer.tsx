import React from "react";
import s from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import {PostType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {actionCreatorAddPost, actionCreatorOnPostChange} from "../../../redux/Profile-reducer";
import {connect} from "react-redux";


type PropsType = {
    store: StoreType
    // newPostText : string
    // posts:  Array<PostType>
    // addPost: (value: string) => void
    // updateNewPostMessage: (newText: string) => void
    // dispatch: (action:any) => void
}


let mapStateToProps = (state: any) => {
    return {
        newPostText: state.myPostsPage.newPostText,
        posts: state.myPostsPage.posts
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        postChange: (text: string | undefined) => {
            dispatch(actionCreatorOnPostChange(text))
        },
        addPost: () => {
            dispatch(actionCreatorAddPost())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;