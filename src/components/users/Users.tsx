import React from "react";
import s from "./Users.module.css"
import {
    followUser,
    setCurrentPage,
    setIsFetching,
    setUsersTotalCount,
    unFollowUser,
    UsersType
} from "../../redux/Users-reducer";

import Avatar from '../../assets/images/defaultAvatar.png'
import preload from '../../assets/images/preloader.gif'

type PropsType = {
    users: Array<UsersType>,
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    followUser: (userId: number) => void,
    unFollowUser: (userId: number) => void,
    onPageChanged: (p:number)=> void,
    isFetching: boolean
}




    const Users = (props: PropsType) => {
        let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

        let pages = []
        for(let i = 1; i < pagesCount; i++){
            pages.push(i)
        }

        return (
            <div className={s.container}>
                <div>{props.isFetching ? <img src={preload}/> : null}</div>
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
                                        onClick={() => props.followUser(u.id)}
                                    >Follow</button>
                                    : <button
                                        className={u.followed
                                            ? s.buttonFollow
                                            : s.buttonUnFollow}
                                        onClick={() => props.unFollowUser(u.id)}
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