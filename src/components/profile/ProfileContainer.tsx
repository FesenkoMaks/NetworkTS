import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {PhotosType} from "../../redux/Users-reducer";
import {setProfile} from "../../redux/Profile-reducer";

type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: ContactsType
    aboutMe: string | null
    photos: PhotosType

}

export type ProfileContainerPropsType = {
    profile: ProfileType
    setProfile: (profile: ProfileType) => void
}


class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {

        axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {

            this.props.setProfile(res.data);

        });
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: any) => {

    return {

        profile: state.myPostsPage.profile

    }
}


export default connect(mapStateToProps,
    {setProfile})(ProfileContainer)