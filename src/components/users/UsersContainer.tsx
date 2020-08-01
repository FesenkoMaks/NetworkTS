import React from "react";

import {connect} from "react-redux";

import {
    follow,
    followUser, getUsers,
    setCurrentPage, setIsDisabled,
    setIsFetching,
    setUsers,
    setUsersTotalCount, unFollow,
    unFollowUser,
    UsersType
} from "../../redux/Users-reducer";

import Users from "./Users";
import { UsersAPI} from "../../redux/Api";

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
    isDisabled: any
    setIsFetching: (isFetching: boolean) => void
    setIsDisabled: (isDisabled: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (numberPage: number) => void
    unFollow: (numberPage: number) => void
}




class UsersAPIComponent extends React.Component<PropsType>{
    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setIsFetching(true);
        // UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setIsFetching(false);
        //     this.props.setUsersTotalCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber: any) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
        // this.props.setIsFetching(true);
        // UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.setUsers(data.items);
        //         this.props.setIsFetching(false);
        //     }
        // )
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
                      setIsDisabled = {this.props.setIsDisabled}
                      isDisabled={this.props.isDisabled}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}

        />

    }
}






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



const UsersContainer = connect(mapStateToProps,
    {setUsers,followUser, unFollowUser, setCurrentPage, setUsersTotalCount, setIsFetching, setIsDisabled, getUsers, unFollow, follow})(UsersAPIComponent)

export default UsersContainer;