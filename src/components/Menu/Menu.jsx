import React from 'react';
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <div><NavLink to='/profile'>Profile</NavLink></div>
            <div><NavLink to='/dialogs'>dialogs</NavLink></div>
            <div><NavLink to='/users'>users</NavLink></div>
            <div><NavLink to='/4'>4</NavLink></div>
            <div><NavLink to='/5'>5</NavLink></div>
        </div>
    )
}

export default Menu;