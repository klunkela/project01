const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS = "SET_TOTAL_USERS"
const SET_IS_FETCHING = "SET_IS_FETCHING"

let initialState = {
    users: [],
    totalUsers: 0,
    onOnePage: 5,
    currentPage: 1,
    isFetching: true
}

const users_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id === action.id) {
                            return {...u, isFollowed: true}
                        }
                        return u;
                    }
                )
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id === action.id) {
                            return {...u, isFollowed: false}
                        }
                        return u;
                    }
                )
            }
        }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS: {
            if (action.totalUsers>100) return {
                ...state, totalUsers: 100
            }
            return {
                ...state, totalUsers: action.totalUsers
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default: {
            return state;
        }
    }
}

export let follow = (id) => {
    return {type: FOLLOW, id: id}
}
export let unfollow = (id) => {
    return {type: UNFOLLOW, id: id}
}
export let setUsers = (users) => {
    return {type: SET_USERS, users: users}
}
export let setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}
export let setTotalUsers = (totalUsers) => {
    return {type: SET_TOTAL_USERS, totalUsers: totalUsers}
}
export let setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, isFetching: isFetching}
}

export default users_reducer
