import {PostDataTypes, PostType} from "./store";
import React from "react";

export type PhotosType = {
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
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_IS_DISABLED = 'SET_IS_DISABLED'

let internalState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    isDisabled: []
}

export const usersReducer = (state: any = internalState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {

                ...state,
                users: [...state.users.map((u: UsersType) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        } else {
                            return u
                        }
                    }
                )]
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map((u: UsersType) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        } else {
                            return u
                        }
                    }
                )]
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUserCount: action.totalUsersCount}
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_IS_DISABLED: {

            return {...state,
                isDisabled: action.isDisabled
                    ? [...state.isDisabled, action.userId]
                    : state.isDisabled.filter((id:any) => id != action.userId)}
        }

        default:
            return state
    }
}

export const followUser = (userId: number) => ({type: FOLLOW, userId})

export const unFollowUser = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers = (users: UsersType) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetching = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching})
export const setIsDisabled = (isDisabled: boolean, userId: number) => ({type: SET_IS_DISABLED, isDisabled, userId})

