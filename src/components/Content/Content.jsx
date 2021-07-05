import React from "react";
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import UsersContainer from "./Users/UsersContainer";
import s from './Content.module.css';

const Content = () => {
    return (
        <div className={s.content}>zxcontent
            <Route
                path="/profile"
                render={() => <Profile/>}
            />

            <Route
                path="/dialogs"
                render={() => <Dialogs/>}
            />

            <Route
                path="/users"
                render={() => <UsersContainer/>}
            />


        </div>
    );
}

export default Content;