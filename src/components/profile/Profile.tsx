import React from "react";
import './Profile.css';

import InfoProfile from "./InfoProfile/InfoProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import ProfileStatus from "./ProfileStatus";

function Profile(props: ProfileContainerPropsType) {

    return (
        <div className={'profile'}>

            <InfoProfile profile={props.profile}/>
            <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;