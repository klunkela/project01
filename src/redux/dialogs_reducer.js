const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

let initialState = {
    usernames: [
        {id: "1", name: "name1"},
        {id: "2", name: "na me2"},
        {id: "3", name: "nam e 3"},
        {id: "4", name: "n a me4"},
        {id: "5", name: "name5"},
        {id: "6", name: "name6"}
    ],
    messages: [
        {id: "1", text: "msg"},
        {id: "2", text: "msg me2"},
        {id: "3", text: "m sg 5555555e 3"},
        {id: "4", text: "msg a me4"},
        {id: "5", text: "msg"},
        {id: "6", text: "name6"}
    ],
    newMessageText: 'zxzzc'
}
const dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: "4",
                text: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        case UPDATE_MESSAGE: {
            return {
                ...state,
                newMessageText: action.text
            }
        }
        default: {
            return state;
        }
    }
}

export let addMessageAC = () => {
    return {type: ADD_MESSAGE}
}

export let onChangeMessageAC = (text) => {
    return {
        type: UPDATE_MESSAGE,
        text: text
    }
}

export default dialogs_reducer
