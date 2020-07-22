import React from "react";
import s from "./Users.module.css"
import {UsersType} from "../../redux/Users-reducer";

import Avatar from '../../assets/images/defaultAvatar.png'

type PropsType = {
    users: Array<UsersType>,
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    onPageChanged: (p:number)=> void
}



    const Users = (props: PropsType) => {
        let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

        let pages = []
        for(let i = 1; i < pagesCount; i++){
            pages.push(i)
        }

        return (
            <div className={s.container}>
                <div>
                    {pages.map(p =>{
                        if (p-5 < props.currentPage ){
                            return <span
                                onClick={(e)=>{props.onPageChanged(p)}}
                                className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>}
                    })}
                </div>
                {
                    props.users.map((u: UsersType) => {

                        return <div key={u.id} className={s.userItem}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : Avatar}/>
                                <div >{u.followed
                                    ? <button
                                        className={u.followed
                                            ? s.buttonFollow
                                            : s.buttonUnFollow}
                                        onClick={() => props.follow(u.id)}
                                    >Follow</button>
                                    : <button
                                        className={u.followed
                                            ? s.buttonFollow
                                            : s.buttonUnFollow}
                                        onClick={() => props.unfollow(u.id)}
                                    >UnFollow</button>}
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