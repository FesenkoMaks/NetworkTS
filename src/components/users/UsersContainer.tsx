import React from "react";

import {connect} from "react-redux";

import {
    followUserAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowUserAC,
    UsersType
} from "../../redux/Users-reducer";

import * as axios from "axios";
import Users from "./Users";

type PropsType = {
    users: Array<UsersType>,
    totalUserCount: number,
    pageSize: number,
    currentPage: number,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UsersType) => void,
    setCurrentPage: (p: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void
}



class UsersAPIComponent extends React.Component<PropsType>{
    componentDidMount() {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);

            this.props.setTotalUsersCount(res.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res =>
            this.props.setUsers(res.data.items))
    }


    render() {
        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}

        />

    }
}






let mapStateToProps = (state: any) => {
    return {
       users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {

        follow: (userId: number) => {
            dispatch(followUserAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowUserAC(userId))
        },
        setUsers: (users: UsersType) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;