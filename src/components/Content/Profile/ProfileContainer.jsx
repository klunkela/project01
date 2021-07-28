import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile} from "../../../redux/profile_reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 12
        this.props.getUserProfile(userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const MapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(MapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)