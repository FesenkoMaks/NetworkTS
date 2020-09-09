import React from "react";
import './Profile.css';

import InfoProfile from "./InfoProfile/InfoProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

class Profile extends React.PureComponent<ProfileContainerPropsType> {
    render() {

        return (

            <div className={'profile'}>

                <InfoProfile profile={this.props.profile}/>
                {/*<ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>*/}
                <ProfileStatusWithHook status={this.props.status} updateProfileStatus={this.props.updateProfileStatus}/>
                <MyPostsContainer/>
            </div>
        )
    }
}

export default Profile;