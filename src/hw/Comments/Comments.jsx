import { React, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Comments.module.css'

function Comments() {
    const [commentsList, setCommentsList] = useState([
        {
            email: "Dan@gmail.com",
            text: "Hello"
        },
        {
            email: "Dan2@gmail.com",
            text: "Hello 2"
        }
    ]);
    const [messageFormState, setMessageFormState] = useState({
        touched: false,
        email: {
            value: "",
            isError: true,
            pattern: /^[^\.]([\w\d_]\.?){1,18}[^\.]@[\w\d_]{1,20}\.\w{2,20}$/,
            errorText: "Incorrect input email"
        },
        message: {
            value: "",
            isError: true,
            pattern: /^.{3,}$/,
            errorText: "The minimum message length is 3 characters"
        }
    });

    function sendMessage() {
        setCommentsList(comments => comments.concat({
            email: messageFormState.email.value,
            text: messageFormState.message.value
        }));
    }

    const input = (e) => {
        const isValid = messageFormState[e.target.name].pattern.test(e.target.value);
        setMessageFormState(prevState => ({
            ...prevState,
            touched: true,
            [e.target.name]: {
                ...prevState[e.target.name],
                value: e.target.value,
                isError: !isValid
            }
        }));
    }

    const lossFocus = () => {
        if (!messageFormState.touched) {
            setMessageFormState(prevState => ({
                ...prevState,
                touched: true
            }));
        }
    }

    return (
        <section className={`${classes.section}`}>
            <div className={`${classes.fromBlock} pb-3 mb-3`}>
                <div className="row align-items-center mb-2 bg-white">
                    <div className="col-auto">
                        <label for="email"  className="col-form-label">Email:</label>
                    </div>
                    <div className="col-auto">
                        <input
                            type="text"
                            id="email"
                            className="form-control"
                            name="email"
                            value={messageFormState.email.value}
                            onBlur={lossFocus}
                            onInput={input} />
                    </div>
                    {messageFormState.email.isError && messageFormState.touched && (
                        <div className="col-auto">
                            <span className={`${classes.errorText} form-text`}>
                                { messageFormState.email.errorText }
                            </span>
                        </div>
                    )}
                </div>
                <div>
                    <label for="message" className="form-label">Message:</label>
                    <textarea
                        rows="4"
                        id="message"
                        className="form-control"
                        name="message"
                        value={messageFormState.message.value}
                        onBlur={lossFocus}
                        onInput={input}>
                    </textarea>
                    {messageFormState.message.isError && messageFormState.touched && (
                        <div className={`${classes.errorText} form-text`}>
                            { messageFormState.message.errorText }
                        </div>
                    )}
                </div>
                <button
                   disabled={messageFormState.email.isError || messageFormState.message.isError}
                   onClick={sendMessage}
                   className="btn btn-primary mt-2">Send
                </button>
            </div>
            <div>
                {
                    commentsList.map(comment =>
                        <div class="alert alert-info" role="alert">
                            {comment.email}: {comment.text}
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Comments
