import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile ? props.profile.photos.small : null}/>
            <div>= ava + descr</div>
        </div>
    )
}

export default ProfileInfo;