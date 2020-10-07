import {PostType} from "./store";
import {ProfileType} from "../components/profile/ProfileContainer";
import {ProfileAPI} from "./Api";

const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_MESSAGE = 'UPD-NEW-POST-MESSAGE';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';


export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
    status: string
}

let internalState = {
    posts: [
        {id: 1, text: 'World', like: 33},
        {id: 2, text: 'Chelsea is champion', like: 3},
        {id: 3, text: 'Comon chelsea', like: 42},
        {id: 4, text: 'It-kamasutra', like: 12},
        {id: 5, text: 'Hou', like: 66},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const profileReducer = (state: InitialStateType = internalState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 7,
                text: action.newPost,
                like: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        }
        case UPD_NEW_POST_MESSAGE:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_PHOTO:
            return {...state, profile: {...state.profile, photos: {...state.profile.photos, large: action.photo}}}

        default:
            return state
    }
}

export const getProfile = (userId: number) => (dispatch: any) => {
    if (!userId) {
        userId = 7634
    }
    ProfileAPI.getProfile(userId).then(data =>
        dispatch(setProfile(data)))
}

export const getProfileStatus = (userId: number) => (dispatch: any) => {

    ProfileAPI.getProfileStatus(userId).then(data => {
        dispatch(setProfileStatus(data))
    })
}

export const updateProfileStatus = (status: string) => (dispatch: any) => {
    ProfileAPI.updateProfileStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setProfileStatus(status))
            }
        })
}

export const updateProfilePhoto = (photo: any) => (dispatch: any) => {
    ProfileAPI.updateProfilePhoto(photo).then(response => {
        debugger
        if (response.resultCode === 0) {
            dispatch(setProfilePhoto(response.data.photos.large))
        }
    })
}

export const actionCreatorAddPost = (newPost: string) => ({type: ADD_POST, newPost})
export const setProfile = (profile: ProfileType) => ({type: SET_PROFILE, profile})
export const setProfileStatus = (status: string) => ({type: SET_STATUS, status})
export const setProfilePhoto = (photo: any) => ({type: SET_PHOTO, photo})
