import React from "react";
import MyPosts from "./MyPosts";
import {actionCreatorAddPost} from "../../../redux/Profile-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        newPostText: state.myPostsPage.newPostText,
        posts: state.myPostsPage.posts
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPost: string) => {
            dispatch(actionCreatorAddPost(newPost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;