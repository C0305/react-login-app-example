import React from "react";
import {withRouter} from "react-router-dom"

function Home() {
    return (
        <>
            <div className="login__container">
                <h1>Login</h1>
            </div>
            <div className="login__container">
                <h1>Login</h1>
            </div>
        </>
    );
}

export default withRouter(Home)