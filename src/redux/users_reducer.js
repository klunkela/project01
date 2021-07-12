const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS = "SET_TOTAL_USERS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_IS_FOLLOWING_IN_PROGRESS = "SET_IS_FOLLOWING_IN_PROGRESS"
let initialState = {
    users: [],
    totalUsers: 0,
    onOnePage: 5,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
}

const users_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(
                    u => {
                        if (u.id === action.id) {
                            return {...u, followed: true}
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
                            return {...u, followed: false}
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
            if (action.totalUsers > 100) return {
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
        case SET_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.id]
                    : state.isFollowingInProgress.filter(id => id != action.id)

            }
        }
        default: {
            return state;
        }
    }
}

export let follow = (id) => {
    return {type: FOLLOW, id}
}
export let unfollow = (id) => {
    return {type: UNFOLLOW, id}
}
export let setUsers = (users) => {
    return {type: SET_USERS, users}
}
export let setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export let setTotalUsers = (totalUsers) => {
    return {type: SET_TOTAL_USERS, totalUsers}
}
export let setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, isFetching}
}
export let setIsFollowingInProgress = (isFollowingInProgress, id) => {
    return {type: SET_IS_FOLLOWING_IN_PROGRESS, isFollowingInProgress, id}
}

export default users_reducer
