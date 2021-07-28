import React from "react";
import {Route} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import UsersContainer from "./Users/UsersContainer";
import s from './Content.module.css';
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "./Login/Login";

const Content = () => {
    return (
        <div className={s.content}>zxcontent
            <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer/>}
            />

            <Route
                path="/dialogs"
                render={() => <Dialogs/>}
            />

            <Route
                path="/users"
                render={() => <UsersContainer/>}
            />
            <Route
                path="/login"
                render={() => <Login/>}
            />


        </div>
    );
}

export default Content;