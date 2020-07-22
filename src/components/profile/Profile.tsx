import React from "react";
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";
import InfoProfile from "./InfoProfile/InfoProfile";
import {PostDataTypes, PostType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    store: StoreType
    // addPost: (value: string) => void
    // updateNewPostMessage: (newText:string) => void
    // dispatch: (action:any) => void
}

function Profile() {
    return (
        <div className={'profile'}>
            <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEZ2vTs7zm0YiimG5QPOxVctxyQp_Bb4iJfR1qJ443LJjieT3G&usqp=CAU'}/>
            </div>
            <InfoProfile/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;