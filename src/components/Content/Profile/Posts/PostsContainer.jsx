import React from 'react';
import {addPostAC, onChangeAC} from '../../../../redux/profile_reducer'
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => {
            dispatch(onChangeAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }

    }
}

const PostsContainer =
    connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;