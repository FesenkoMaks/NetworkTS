import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {PhotosType} from "../../redux/Users-reducer";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../redux/Profile-reducer";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {compose} from "redux";

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
    status: string
    isAuth: boolean
    profile: ProfileType
    getProfile: (userId: number) => void
    getProfileStatus: (userId: number) => void
    updateProfileStatus: (status: string) => void

}


class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<{userId: any}>> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
           userId=7634
        }

        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateProfileStatus={this.props.updateProfileStatus}/>
    }
}

let mapStateToProps = (state: any) => {

    return {

        profile: state.myPostsPage.profile,
        isAuth: state.auth.isAuth,
        status: state.myPostsPage.status
    }
}

export default compose(
    connect(mapStateToProps,
        {getProfile, getProfileStatus, updateProfileStatus}),
    withRouter
)(ProfileContainer) as React.ComponentClass