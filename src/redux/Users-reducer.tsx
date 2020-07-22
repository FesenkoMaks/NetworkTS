import {PostDataTypes, PostType} from "./store";
import React from "react";

type PhotosType = {
    small: string | undefined
    large: string | undefined
}

export type UsersType = {
    name: string | null
    id: number
    photos: PhotosType
    status: string | null
    followed: boolean
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let internalState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1
}

export const usersReducer = (state: any = internalState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {

                ...state,
                users: state.users.map((u: UsersType) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        } else {
                            return u
                        }
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: UsersType) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        } else {
                            return u
                        }
                    }
                )
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:{

            return {...state, totalUserCount: action.totalUsersCount}}
        default:
            return state
    }
}

export const followUserAC = (userId: number) => ({type: FOLLOW, userId})

export const unFollowUserAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: UsersType) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
