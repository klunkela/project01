import React from "react";

let Msg = (props) => {
    return (
        <div>{props.text}</div>
    )
}

let Messages = (props) => {
    let addMessage = () => {
        props.addMessage()
    }

    let onChange = (e) => {
        let text = e.target.value;
        props.onChange(text)
    }

    return (
        <div>
            {props.messages.map(
                e => <Msg text={e.text}/>
            )}
            <textarea
                onChange={onChange}
                value={props.newMessageText}
            />
            <button onClick={addMessage}>Add msg</button>
        </div>
    );
}

export default Messages;