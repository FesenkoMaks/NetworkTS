import * as axios from "axios";
import {PhotosType, UsersType} from "./Users-reducer";
import {ProfileType} from "../components/profile/ProfileContainer";

type ResponseType<T> = {
    data: T
    resultCode: number
    messages: Array<string>
}

type LoginGetResponseType = {
    id: number
    email: string
    login: string
}

type ResponseUsersType = {
    items: UsersType
    totalCount: number
    error: string
}


let instance = axios.default.create({
    withCredentials: true,
    headers: {
        "API-KEY": '41baaef3-6da6-4de6-b20f-66271991d083'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}


export const LoginAPI = {
    getAuthMe() {
        return instance.get<ResponseType<LoginGetResponseType>>(`auth/me`)
            .then(response => response.data)
    },

    login(email: string, password: string, rememberMe: boolean = false, captcha?: string) {
        return instance.post<ResponseType<{ userId: number }>>(`/auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },

    loginout() {
        return instance.delete<ResponseType<{}>>(`/auth/login`)
            .then(response => response.data)
    },
}

export const SecurityAPI = {
    getCaptchaUrl(){
        return instance.get<{url: string}>(`/security/get-captcha-url`)
            .then(response => response.data)
    }
}


export const FollowAPI = {
    unFollowDel(userId: number) {
        return instance.delete<ResponseType<{}>>(`follow/${userId}`)
            .then(response => response.data)
    },

    followPost(userId: number) {
        return instance.post<ResponseType<{}>>(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const ProfileAPI = {
    getProfile(userId: number) {
        debugger
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data);
    },

    getProfileStatus(userId: number) {

        return instance.get(`profile/status/${userId}`)
            .then(response => {
            return response.data
        });
    },

    updateProfileStatus(status: string) {
        return instance.put<ResponseType<{}>>(`profile/status`, {status: status})
            .then(response => response.data);
    },

    updateProfilePhoto(photo: any) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put<ResponseType<{photos: PhotosType}>>(`profile/photo`, formData,{
            headers: {
                'Content-type' : 'multipart/form-data'
            }
        })
            .then(response => response.data)
    }
}




