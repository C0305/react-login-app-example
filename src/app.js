import React from 'react';
import Login from "./views/login/index";
import Layout from "./components/layout/index";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/">
                        <Login/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App