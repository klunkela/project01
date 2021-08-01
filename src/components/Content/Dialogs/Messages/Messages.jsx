import React from "react";
import {Field, Form, Formik} from "formik";

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
            <MessagesForm addMessage={props.addMessage}/>
        </div>
    );
}
let MessagesForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    message: '',
                }}
                onSubmit={
                    async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        props.addMessage(values.message);
                    }}
            >
                <Form>
                    <Field id="message" name="message" placeholder="" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Messages;