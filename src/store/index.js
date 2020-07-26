import appReducer from "./reducers"
import thunk from "redux-thunk"
import {applyMiddleware, createStore} from "redux"

const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) : {}

export default () => {
    return applyMiddleware(thunk)(createStore)(appReducer, initialState)
}