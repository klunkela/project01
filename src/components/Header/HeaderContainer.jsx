import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getUserAuthData} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserAuthData()
    }
    render() {
        return <Header {...this.props}/>
    }
}

const MapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId,
    }
}

export default connect(MapStateToProps, {
        getUserAuthData
    }
)(HeaderContainer);