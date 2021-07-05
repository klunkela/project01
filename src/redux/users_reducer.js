const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = "SET_USERS"

let initialState = {
    users: [/*
        {id: "1", name: "name1", isFollowed: true, place: {country: "russia", city: "Bgd"}},
        {id: "2", name: "name2", isFollowed: false, place: {country: "russia", city: "msc"}},
        {id: "3", name: "name3", isFollowed: true, place: {country: "blrs", city: "minsk"}}
    */]
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
                ...state, users: [...state.users, ...action.users ]
            }
        }
        default: {
            return state;
        }
    }
}

export let followAC = (id) => {
    return {type: FOLLOW, id: id}
}

export let unfollowAC = (id) => {
    return {type: UNFOLLOW, id: id}
}

export let setUsersAC = (users) => {
    return {type: SET_USERS, users: users}
}

export default users_reducer
