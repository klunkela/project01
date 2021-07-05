import React from "react";
import {addMessageAC, onChangeMessageAC} from "../../../../redux/dialogs_reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => {
            dispatch(onChangeMessageAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }

    }
}

const MessagesContainer = connect(    mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;