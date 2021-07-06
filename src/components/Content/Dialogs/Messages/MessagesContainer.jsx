import React from "react";
import {addMessage, changeMessage} from "../../../../redux/dialogs_reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        textOfNewMessage: state.dialogsPage.textOfNewMessage
    }
}

export default connect(mapStateToProps, {
    changeMessage,
    addMessage
})(Messages);
