import {createSelector} from "reselect"

let mapStateToProps = (state: any) => {
    return {

        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isDisabled: state.usersPage.isDisabled,

    }
}

const getUsersSelector = (state: any) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(getUsersSelector ,(users)=>{
    return users.filter( (u: any) => true)
})

export  const getPageSizeSelector = (state: any) => {
    return state.usersPage.pageSize
}
export  const getTotalUserCountSelector = (state: any) => {
    return state.usersPage.totalUserCount
}
export  const getCurrentPageSelector = (state: any) => {
    return state.usersPage.currentPage
}
export  const getIsFetchingSelector = (state: any) => {
    return state.usersPage.isFetching
}
export  const getIsDisabledSelector = (state: any) => {
    return state.usersPage.isDisabled
}