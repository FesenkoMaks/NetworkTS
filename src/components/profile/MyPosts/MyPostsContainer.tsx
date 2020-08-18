import React from "react";
import MyPosts from "./MyPosts";
import {actionCreatorAddPost} from "../../../redux/Profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
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