import appReducer from "./reducers"
import thunk from "redux-thunk"
import {applyMiddleware, createStore} from "redux"

const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) : {}

const saveToLocalStorage = store => next => action => {
    next(action)
    const state = store.getState()
    localStorage.setItem('redux-store', JSON.stringify(state))

}

export default () => {
    return applyMiddleware(thunk, saveToLocalStorage)(createStore)(appReducer, initialState)
}