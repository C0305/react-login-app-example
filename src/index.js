import React from "react"
import "@babel/polyfill";
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'

import "./scss/index.scss"
import storeFactory from "./store/index"
import App from "./app"

const store = storeFactory()

window.store = store

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)
