const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default: {
            return state;
        }
    }
}

export let setUserAuthData = (email, userId, login) => {
    return {type: SET_USER_AUTH_DATA, data: {email, userId, login}}
}

export default auth_reducer
