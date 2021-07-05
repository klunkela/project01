const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: "1", post: "post 1"},
        {id: "2", post: "post 2"},
        {id: "3", post: "post 3334"}
    ],
    newPostText: 'zxc'
}

const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "4",
                post: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        default: {
            return state;
        }
    }
}

export let addPostAC = () => {
    return {type: ADD_POST}
}

export let onChangeAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    }
}

export default profile_reducer
