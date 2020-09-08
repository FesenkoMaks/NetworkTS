import * as axios from "axios";

let instance = axios.default.create({
    withCredentials: true,
    headers: {
        "API-KEY": '41baaef3-6da6-4de6-b20f-66271991d083'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}


export const LoginAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },

    loginout() {
        return instance.delete(`/auth/login`)
            .then(response => response.data)
    }
}


export const FollowAPI = {
    unFollowDel(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },

    followPost(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const ProfileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },

    getProfileStatus(userId: number) {

        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        });
    },

    updateProfileStatus(status: string) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data);
        ;
    }
}




