import React from "react";
import {FollowAPI, UsersAPI} from "./Api";

//type

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

type followUserType = ReturnType<typeof followUser>
type unFollowUserType = ReturnType<typeof unFollowUser>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setUsersTotalCountType = ReturnType<typeof setUsersTotalCount>
type setIsFetchingType = ReturnType<typeof setIsFetching>
type setIsDisabledType = ReturnType<typeof setIsDisabled>

type ActionType =
    followUserType
    | unFollowUserType
    | setUsersType
    | setCurrentPageType
    | setUsersTotalCountType
    | setIsFetchingType
    | setIsDisabledType
    | any


//const

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_IS_DISABLED = 'SET_IS_DISABLED'

//initial state

let internalState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    isDisabled: []
}

//reducer

export const usersReducer = (state: any = internalState, action: ActionType) => {
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
                    : state.isDisabled.filter((id: number) => id != action.userId)}
        }
        default:
            return state
    }
}

//thunk

export const getUsers = (currentPage:number, pageSize:number) => (dispatch: any) => {
    dispatch(setIsFetching(true));
    UsersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setIsFetching(false));
        dispatch(setUsersTotalCount(data.totalCount));
    });
}

export const unFollow = (userId: number) => (dispatch: any) => {
    dispatch(setIsDisabled(true, userId))
    FollowAPI.unFollowDel(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unFollowUser(userId))
            dispatch(setIsDisabled(false, userId))
        }
    })
}
export const follow = (userId: number) => (dispatch: any) => {
    dispatch(setIsDisabled(true, userId))
    FollowAPI.followPost(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followUser(userId))
            dispatch(setIsDisabled(false, userId))
        }

    })
}

//AC

export const followUser = (userId: number) => ({type: FOLLOW, userId})
export const unFollowUser = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsers = (users: UsersType) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetching = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching})
export const setIsDisabled = (isDisabled: boolean, userId: number) => ({type: SET_IS_DISABLED, isDisabled, userId})

