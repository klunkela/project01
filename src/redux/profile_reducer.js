import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: "1", post: "post 1"},
        {id: "2", post: "post 2"},
        {id: "3", post: "post 3334"}
    ],
    textOfNewPost: 'zxc',
    profile: null,
    status: "asd"
}

const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "4",
                post: state.textOfNewPost
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                textOfNewPost: ''
            }
        }
        case CHANGE_NEW_POST_TEXT: {
            return {
                ...state,
                textOfNewPost: [state.textOfNewPost + action.textOfNewPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state;
        }
    }
}

export let addPost = () => {
    return {type: ADD_POST}
}

export let changeNewPostText = (textOfNewPost) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        textOfNewPost: textOfNewPost.nativeEvent.data
    }
}
export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export let setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profile_reducer
