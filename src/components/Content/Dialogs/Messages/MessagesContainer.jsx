import React from "react";
import {addMessage, changeMessage} from "../../../../redux/dialogs_reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        textOfNewMessage: state.dialogsPage.textOfNewMessage
    }
}

export default compose(
    connect(mapStateToProps, {
        changeMessage,
        addMessage
    }),
    withAuthRedirect
)(Messages)