import React from "react";
import {addMessage} from "../../../../redux/dialogs_reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
    }
}

export default compose(
    connect(mapStateToProps, {
        addMessage
    }),
   // withAuthRedirect
)(Messages)