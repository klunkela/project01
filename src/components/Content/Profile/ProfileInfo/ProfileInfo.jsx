import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile ? props.profile.photos.small : null}/>
            <div>= ava + description =)</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo;