import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsers, setIsFetching} from "../../../redux/users_reducer";
import axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + this.props.currentPage + '&count=' + this.props.onOnePage, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
                this.props.setCurrentPage(1);
                this.props.setIsFetching(false)
            });
    }

    onPageChanged = (p) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(p);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=' + p + '&count=' + this.props.onOnePage, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false)
            });
    }

    render() {
        return <Users
            totalUsers={this.props.totalUsers}
            onOnePage={this.props.onOnePage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            isFetching={this.props.isFetching}
        />
    }
}

const MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        onOnePage: state.usersPage.onOnePage,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/*
const MapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsers: (totalUsers) => {
            dispatch(setTotalUsersAC(totalUsers))
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}
*/

export default connect(MapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsers,
        setIsFetching
    }
)(UsersContainer);