import {createSelector} from "reselect"
import {AppRootStateType} from "./redux-store";
import {UsersType} from "./Users-reducer";


const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersSelector ,(users)=>{
    return users.filter( (u: UsersType) => true)
})

export  const getPageSizeSelector = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}
export  const getTotalUserCountSelector = (state: AppRootStateType) => {
    return state.usersPage.totalUserCount
}
export  const getCurrentPageSelector = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}
export  const getIsFetchingSelector = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}
export  const getIsDisabledSelector = (state: AppRootStateType) => {
    return state.usersPage.isDisabled
}