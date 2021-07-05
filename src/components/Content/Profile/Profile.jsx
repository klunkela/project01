import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
    return (
        <div>
            prof
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    )
}

export default Profile;