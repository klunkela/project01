const ADD_MESSAGE = 'ADD_MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'

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
    textOfNewMessage: 'zxzzc'
}
const dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: "4",
                text: state.textOfNewMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                textOfNewMessage: ''
            }
        }
        case CHANGE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                textOfNewMessage: [state.textOfNewMessage + action.textOfNewMessage]
            }
        }
        default: {
            return state;
        }
    }
}

export let addMessage = () => {
    return {type: ADD_MESSAGE}
}

export let changeMessage = (textOfNewMessage) => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        textOfNewMessage: textOfNewMessage.nativeEvent.data
    }
}

export default dialogs_reducer
