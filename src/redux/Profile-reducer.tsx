import {PostDataTypes, PostType} from "./store";
import {UsersType} from "./Users-reducer";
import {ProfileType} from "../components/profile/ProfileContainer";

const ADD_POST = 'ADD-POST';
const UPD_NEW_POST_MESSAGE ='UPD-NEW-POST-MESSAGE';
const SET_PROFILE ='SET_PROFILE'

let internalState = {
    posts: [
        {id: 1, text: 'World', like: 33},
        {id: 2, text: 'Chelsea is champion', like: 3},
        {id: 3, text: 'Comon chelsea', like: 42},
        {id: 4, text: 'It-kamasutra', like: 12},
        {id: 5, text: 'Hou', like: 66},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: PostDataTypes = internalState , action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: 7,
                text: state.newPostText,
                like: 0
            }
            return  {...state,
                posts : [...state.posts, newPost],
                newPostText: ''
            }

        }
        case UPD_NEW_POST_MESSAGE:
            return  {...state,
                newPostText: action.newText
            }
        case SET_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state
    }
}

export const actionCreatorAddPost = () => ({type: ADD_POST})
export const setProfile = (profile: ProfileType) => ({type: SET_PROFILE, profile})

export const actionCreatorOnPostChange = (text: string | undefined) => ({type:UPD_NEW_POST_MESSAGE, newText: text})
