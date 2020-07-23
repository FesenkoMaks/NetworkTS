import React from "react";
import './Profile.css';

import InfoProfile from "./InfoProfile/InfoProfile";

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";




function Profile(props: ProfileContainerPropsType) {
    return (
        <div className={'profile'}>

            <InfoProfile profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;