import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {PhotosType} from "../../redux/Users-reducer";
import {getProfile, setProfile} from "../../redux/Profile-reducer";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {ProfileAPI} from "../../redux/Api";

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
    getProfile: (userId: number) => void
}


class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<{userId: any}>> {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
        // let userId = this.props.match.params.userId
        // if (!userId) {
        //    userId=2
        // }
        // ProfileAPI.getProfile(userId).then(data => {this.props.setProfile(data)})
        // axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(res => {
        //
        //     this.props.setProfile(res.data);
        //
        // });
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

let WithRouterProfileContainer  = withRouter(ProfileContainer)

export default connect(mapStateToProps,
    {getProfile})(WithRouterProfileContainer)