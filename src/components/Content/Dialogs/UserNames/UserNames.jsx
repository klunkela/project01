import React from "react";
import {NavLink} from "react-router-dom";

const UserName = (props) => {
    return (
        <div><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    )
}

const UserNames = (props) => {
    return (
        <div>
            {props.usernames.map(c => <UserName id={c.id} name={c.name}/>)}
        </div>
    )
}

export default UserNames;