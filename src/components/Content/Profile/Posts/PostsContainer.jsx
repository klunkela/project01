import React from 'react';
import {addPost} from '../../../../redux/profile_reducer'
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textOfNewPost: state.profilePage.textOfNewPost
    }
}

export default connect(mapStateToProps, {
    addPost
})(Posts);