import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../../redux/profile_reducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 12
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

let withRouterComp = withRouter(ProfileContainer)
export default connect(MapStateToProps, {
        setUserProfile
    }
)(withRouterComp);