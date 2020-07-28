import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";

import {login} from "../../../store/actions";
import Ecinput from "../../input";
import EcButton from "../../button";


const waitOneSec = (callback) => {
    setTimeout(callback, 1000)
}

const LoginForm = () => {

    const [isValidUsername, setIsValidUsername] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)
    const [isFormValid, setIsFormValid] = useState(false)
    const username = useRef()
    const password = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        setIsFormValid(!(isValidUsername && isValidPassword))
    })

    const validateUsername = () => {
        const regex = RegExp(/^[a-zA-Z0-9!"$%&/]{8,20}$/);
        waitOneSec(() => setIsValidUsername(regex.test(username.current.value)))
    }

    const validPassword = () => {
        const reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!"$%&])[a-zA-Z0-9!"$%&]{8,20}$/

        const sequenceTest = (text) => {
            // Check for sequential alphanumeric characters
            for (let i in text) {
                if (text.hasOwnProperty(i)) {
                    if (+text[+i + 1] === +text[i] + 1 && +text[+i + 2] === +text[i] + 2) {
                        return false;
                    }
                    if (String.fromCharCode(text.charCodeAt(i) + 1) === text[+i + 1] &&
                        String.fromCharCode(text.charCodeAt(i) + 2) === text[+i + 2]) {
                        return false;
                    }
                }
            }

            return true;
        }
        waitOneSec(() => {
            setIsValidPassword(reg.test(password.current.value) && sequenceTest(password.current.value))
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(login({
            username: username.current.value,
            password: password.current.value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <Ecinput onBlur={validateUsername}
                     ref={username}
                     name="username"
                     placeholder="Username"
                     className="is-full-width ec-input--space-on-sides"/>

            <Ecinput onBlur={validPassword}
                     ref={password}
                     name="password"
                     type="password"
                     placeholder="Password"
                     className="is-full-width ec-input--space-on-sides"/>
            <div className="item">
                <EcButton className="button__center light-blue-btn" type="submit" disabled={isFormValid} text="Enter"/>
            </div>
        </form>
    )
}

export default LoginForm