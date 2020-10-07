import React from "react";
import s from "./Users.module.css"
import {UsersType} from "../../redux/Users-reducer";

import Avatar from '../../assets/images/defaultAvatar.png'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader";
import {Paginator} from "../common/Paginator";


type PropsType = {
    users: Array<UsersType>,
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (p: number) => void,
    isFetching: boolean
    isDisabled: any
    follow: (numberPage: number) => void
    unFollow: (numberPage: number) => void
}

const Users = (props: PropsType) => {

    return (
        <div className={s.container}>
            <div>{props.isFetching ? <Preloader/> : null}</div>
            <Paginator portionSize={10} totalUserCount={props.totalUserCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {props.users.map((u: UsersType) => {
                return <div key={u.id} className={s.userItem}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : Avatar}/>
                        </NavLink>
                        <div>
                            {
                                u.followed ? <button
                                        disabled={props.isDisabled.some((id: number) => id === u.id)}
                                        className={u.followed
                                            ? s.buttonUnFollow
                                            : s.buttonFollow}
                                        onClick={() => {
                                            props.unFollow(u.id)
                                        }}
                                    >UnFollow</button>
                                    : <button
                                        disabled={props.isDisabled.some((id: number) => id === u.id)}
                                        className={u.followed
                                            ? s.buttonUnFollow
                                            : s.buttonFollow}
                                        onClick={() => {
                                            props.follow(u.id)
                                        }}
                                    >Follow</button>
                            }
                        </div>
                    </div>
                    <div>
                        <div className={s.fullName}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                    </div>
                    <div className={s.location}>{'location'}</div>
                </div>
            })
            }
        </div>
    )
}

export default Users;