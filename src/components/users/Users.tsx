import React from "react";
import s from "./Users.module.css"
import {UsersType} from "../../redux/Users-reducer";

import Avatar from '../../assets/images/defaultAvatar.png'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader";
import {FollowAPI} from "../../redux/Api";


type PropsType = {
    users: Array<UsersType>,
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    followUser: (userId: number) => void,
    unFollowUser: (userId: number) => void,
    onPageChanged: (p: number) => void,
    isFetching: boolean
}


const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.container}>
            <div>{props.isFetching ? <Preloader/> : null}</div>
            <div>
                {pages.map(p => {
                    if (p - 5 < props.currentPage) {
                        return <span
                            onClick={(e) => {
                                props.onPageChanged(p)
                            }}
                            className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    }
                })}
            </div>
            {
                props.users.map((u: UsersType) => {
                    debugger
                    return <div key={u.id} className={s.userItem}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : Avatar}/>
                            </NavLink>
                            <div>
                                {
                                    u.followed ? <button
                                            className={u.followed
                                                ? s.buttonUnFollow
                                                : s.buttonFollow}
                                            onClick={() =>
                                                FollowAPI.unFollowDel(u.id).then(data => {
                                                    if (data.resultCode === 0) {
                                                        props.unFollowUser(u.id)
                                                    }

                                                })
                                            }

                                        >UnFollow</button>
                                        : <button
                                            className={u.followed
                                                ? s.buttonUnFollow
                                                : s.buttonFollow}
                                            onClick={() =>
                                                FollowAPI.followPost(u.id).then(data => {
                                                    if (data.resultCode === 0) {
                                                        props.followUser(u.id)
                                                    }

                                                })}

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