import React from "react";

import {connect} from "react-redux";

import {
    followUser,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setUsersTotalCount,
    unFollowUser,
    UsersType
} from "../../redux/Users-reducer";

import * as axios from "axios";
import Users from "./Users";

type PropsType = {
    users: Array<UsersType>,
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    followUser: (userId: number) => void,
    unFollowUser: (userId: number) => void,
    setUsers: (users: UsersType) => void,
    setCurrentPage: (p: number) => void,
    setUsersTotalCount: (totalUsersCount: number) => void
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
}




class UsersAPIComponent extends React.Component<PropsType>{
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true}
            ).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setIsFetching(false);
            this.props.setUsersTotalCount(res.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true);
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}` ,
            {withCredentials: true}
            ).then(res => {
                this.props.setUsers(res.data.items);
                this.props.setIsFetching(false);
            }
        )
    }


    render() {
        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      isFetching={this.props.isFetching}
                      followUser={this.props.followUser}
                      unFollowUser={this.props.unFollowUser}
                      onPageChanged={this.onPageChanged}


        />

    }
}






let mapStateToProps = (state: any) => {
    return {
       users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}


// let mapDispatchToProps = (dispatch: any) => {
//     return {
//
//         follow: (userId: number) => {
//             dispatch(followUser(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollowUser(userId))
//         },
//         setUsers: (users: UsersType) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPage(pageNumber))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setUsersTotalCount(totalUsersCount))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetching(isFetching))
//         },
//
//     }
// }

const UsersContainer = connect(mapStateToProps,
    {setUsers,followUser, unFollowUser, setCurrentPage, setUsersTotalCount, setIsFetching})(UsersAPIComponent)

export default UsersContainer;