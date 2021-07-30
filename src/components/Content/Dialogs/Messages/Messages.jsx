import React from "react";

let Msg = (props) => {
    return (
        <div>{props.text}</div>
    )
}

let Messages = (props) => {
    return (
        <div>
            {props.messages.map(
                e => <Msg key={e.id} text={e.text}/>
            )}
            <MessagesForm/>
        </div>
    );
}
let MessagesForm = (props) => {
    return (
        <div>
            <textarea
                onChange={props.changeMessage}
                value={props.textOfNewMessage}
            />
            <button onClick={props.addMessage}>Add msg</button>
        </div>
    );
}

export default Messages;