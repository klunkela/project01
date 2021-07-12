import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {setUserAuthData} from "../../redux/auth_reducer";
import axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    this.props.setUserAuthData(email, id, login);
                }
            });
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
        setUserAuthData
    }
)(HeaderContainer);