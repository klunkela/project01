import profile_reducer from "./profile_reducer";
import dialogs_reducer from "./dialogs_reducer";
import {combineReducers, createStore} from "redux";
import users_reducer from "./users_reducer";

let reducers = combineReducers(
    {
        profilePage: profile_reducer,
        dialogsPage: dialogs_reducer,
        usersPage: users_reducer
    }
)

let store = createStore(reducers)

export default store