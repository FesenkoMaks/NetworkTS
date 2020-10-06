import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {PhotosType} from "../../redux/Users-reducer";
import {getProfile, getProfileStatus, updateProfilePhoto, updateProfileStatus} from "../../redux/Profile-reducer";
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
    photos: PhotosType

}



export type ProfileContainerPropsType = {
    itsMe: boolean
    getUserId: number
    status: string
    isAuth: boolean
    profile: ProfileType
    getProfile: (userId: number) => void
    getProfileStatus: (userId: number) => void
    updateProfileStatus: (status: string) => void
    updateProfilePhoto: (photo: any) => void

}


class ProfileContainer extends React.PureComponent<ProfileContainerPropsType & RouteComponentProps<{userId: any}>> {
    refreshComponent(){
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=this.props.getUserId
        }

        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }
    componentDidMount() {
        this.refreshComponent()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType & RouteComponentProps<{ userId: any }>>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshComponent()
        }
    }

    render() {

        return <Profile {...this.props}
                        itsMe={!!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateProfileStatus={this.props.updateProfileStatus}
                        updateProfilePhoto={this.props.updateProfilePhoto}
        />
    }
}

let mapStateToProps = (state: any) => {
    debugger
    return {
        profile: state.profile,
        isAuth: state.auth.isAuth,
        getUserId: state.auth.id,
        status: state.myPostsPage.status
    }
}

export default compose(
    connect(mapStateToProps,
        {getProfile, getProfileStatus, updateProfileStatus, updateProfilePhoto}),
    withRouter
)(ProfileContainer) as React.ComponentClass