import React, {ChangeEvent} from "react";
import s from './InfoProfile.module.css';
import Preloader from "../../common/Preloader";
import Avatar from '../../../assets/images/defaultAvatar.png'
import {InfoProfilePicture} from "./InfoProfilePicture";
import {ProfileType} from "../ProfileContainer";

type PropsType = {
    profile: ProfileType
    itsMe: boolean
    updateProfilePhoto: (photo: any) => void
}

function InfoProfile(props: PropsType) {
    const saveFile = (e: ChangeEvent<any>) => {
        if (e.target.files.length){
            props.updateProfilePhoto(e.target.files[0])
        }
    }

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <InfoProfilePicture/>
                <div className={s.container}>
                    <img src={props.profile.photos ? props.profile.photos.large : Avatar}/>
                    {!props.itsMe? <input type="file" onChange={saveFile}/> : ''}
                    <div className={s.infa}>
                        <div className={s.item}>{props.profile.fullName}</div>
                        <div className={s.item}>{props.profile.lookingForAJobDescription}</div>
                        <div className={s.item}>{props.profile.contacts.website}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoProfile;