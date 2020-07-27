import React from 'react';
import Login from "./components/views/login/index";
import Layout from "./components/layout/index";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/views/home";
import Transfer from "./components/views/transfer";
import {useSelector} from "react-redux";

function App() {
    return (
        <Router>
            <Layout location={location}>
                <Switch>
                    <LogInRoute exact path="/">
                        <Login/>
                    </LogInRoute>
                    <PrivateRoute exact path="/home">
                        <Home/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/transfer">
                        <Transfer/>
                    </PrivateRoute>
                </Switch>
            </Layout>
        </Router>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.


function LogInRoute({children, ...rest}) {
    const loggedUser = useSelector(state => state.userManagement);
    return (
        <Route
            {...rest}
            render={({location}) =>
                !loggedUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

function PrivateRoute({children, ...rest}) {
    const loggedUser = useSelector(state => state.userManagement);
    return (
        <Route
            {...rest}
            render={({location}) =>
                loggedUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

export default App