import React from "react";

import {connect } from "react-redux";

import {
    follow,
    getUsers,
    setCurrentPage,
    unFollow,
    UsersType
} from "../../redux/Users-reducer";

import Users from "./Users";
import {WithAuthRedirect} from "../hoc/withAuthComponent";
import { compose } from "redux";
import { RouteComponentProps } from "react-router-dom";
import {
    getCurrentPageSelector, getIsDisabledSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUserCountSelector,
    getUsersSuperSelector
} from "../../redux/User-selector";

type PropsType = {
    users: Array<UsersType>,
    totalUserCount: number,
    pageSize: number,
    currentPage: number,

    setCurrentPage: (p: number) => void,

    isFetching: boolean
    isDisabled: any

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

                      onPageChanged={this.onPageChanged}

                      isDisabled={this.props.isDisabled}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}

        />

    }
}






let mapStateToProps = (state: any) => {
    return {

        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUserCount: getTotalUserCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isDisabled: getIsDisabledSelector(state),

    }
}



export default compose(
    connect(mapStateToProps,
        { setCurrentPage,   getUsers, unFollow, follow}),
    WithAuthRedirect
)(UsersAPIComponent) as React.ComponentClass