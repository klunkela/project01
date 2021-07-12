import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>
            hheader
            {props.isAuth ? (props.login + props.userId + props.email) :
                <NavLink to={'/login'}>LogiN</NavLink>}
        </div>

    );
}

export default Header;