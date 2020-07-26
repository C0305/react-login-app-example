import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {login} from "../../store/actions";


const LoginForm = () => {

    const [isValidUsername, setIsValidUsername] = useState(false)
    const [isValidPassword, setIsValidPassword] = useState(false)
    const dispatch = useDispatch()


    const waitOneSec = (callback) => {
        setTimeout(() => {
            callback
        }, 1000)
    }

    const validateUsername = ({target}) => {
        const regex = RegExp(/^[a-zA-Z0-9!"$%&/]{8,20}$/);
        const val = target.value
        waitOneSec(setIsValidUsername(regex.test(val)))
    }

    const validPassword = ({target}) => {
        const reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!"$%&])[a-zA-Z0-9!"$%&]{8,20}$/


        function sequenceTest(text) {
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

        setIsValidPassword(reg.test(target.value) && sequenceTest)
    }

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(login(event.target.username.value))
    }

    const isValid = () => {
        return !(isValidUsername && isValidPassword)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="input login is-full-width">
                <input type="text" placeholder="Username" name="username" onBlur={validateUsername}/>
            </div>
            <div className="input login is-full-width">
                <input type="password" placeholder="Password" name="password" onBlur={validPassword}/>
            </div>
            <div className="item">
                <button type="submit" className="button" disabled={isValid()}>
                    <span>Enter</span>
                </button>
            </div>
        </form>
    )
}

export default LoginForm