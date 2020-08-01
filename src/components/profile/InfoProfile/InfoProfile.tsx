import React from "react";
import s from './InfoProfile.module.css';
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader";
import Avatar from '../../../assets/images/defaultAvatar.png'

type PropsType = {
    profile: ProfileType
}


function InfoProfile(props: PropsType) {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (


            <div>
                <div>
                    <img
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEZ2vTs7zm0YiimG5QPOxVctxyQp_Bb4iJfR1qJ443LJjieT3G&usqp=CAU'}/>
                </div>
                <div className={s.container}>
                    <img src={props.profile.photos.small ? props.profile.photos.small : Avatar}/>
                    <div className={s.infa}>
                        <div className={s.item}>{props.profile.fullName}</div>
                        <div className={s.item}>{props.profile.lookingForAJobDescription}</div>
                        <div className={s.item}>{props.profile.aboutMe}</div>
                        <div className={s.item}>Education: BNTU</div>
                        <div className={s.item}>{props.profile.contacts.website}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoProfile;