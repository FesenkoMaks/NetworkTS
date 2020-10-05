import React from "react";
import s from './InfoProfile.module.css';
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader";
import Avatar from '../../../assets/images/defaultAvatar.png'
import {InfoProfilePicture} from "./InfoProfilePicture";

type PropsType = {
    profile: ProfileType
    itsMe: boolean
    updateProfilePhoto: ( photo: any) => void
}

function InfoProfile(props: PropsType) {
    const saveFile = (events: any) => {
        if (events.target.files.length){
            props.updateProfilePhoto(events.target.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <InfoProfilePicture/>
                <div className={s.container}>
                    <img src={props.profile.photos.small ? props.profile.photos.small : Avatar}/>
                    {!props.itsMe? <input type="file" onChange={saveFile}/> : ''}
                    <div className={s.infa}>
                        <div className={s.item}>{props.profile.fullName}</div>
                        <div className={s.item}>{props.profile.lookingForAJobDescription}</div>
                        <div className={s.item}>{props.profile.aboutMe}</div>
                        <div className={s.item}>{props.profile.contacts.website}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoProfile;