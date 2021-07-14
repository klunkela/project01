import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    unfollow,
    setCurrentPage,
    setIsFollowingInProgress,
    getUsers
} from "../../../redux/users_reducer";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.onOnePage)
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.onOnePage)
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
        setCurrentPage,
        setIsFollowingInProgress,
        getUsers
    }
)(UsersContainer);