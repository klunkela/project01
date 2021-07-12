import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsers,
    setIsFetching,
    setIsFollowingInProgress
} from "../../../redux/users_reducer";
import axios from "axios";
import {getUsers} from "../../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.onOnePage).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsers(data.totalCount);
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
            setIsFollowingInProgress={this.props.setIsFollowingInProgress}
            isFollowingInProgress={this.props.isFollowingInProgress}
        />
    }
}

const MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        onOnePage: state.usersPage.onOnePage,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

export default connect(MapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsers,
        setIsFetching,
        setIsFollowingInProgress
    }
)(UsersContainer);