import React from "react";
import LoginForm from "./login-form";

import {withRouter} from "react-router";

const Login = () =>
    <div className="login__container">
        <h1>Login</h1>
        <LoginForm/>
    </div>


export default withRouter(Login)