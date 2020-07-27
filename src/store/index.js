import appReducer from "./reducers"
import thunk from "redux-thunk"
import {applyMiddleware, createStore} from "redux"

import {transactions} from "../mocks/transactionHistory.json"
import {balance} from "../mocks/accountBalance.json"
import exchangeRate from "../mocks/exchangeRate.json"

const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) : {transactions, balance, exchangeRate}

const saveToLocalStorage = store => next => action => {
    next(action)
    const state = store.getState()
    localStorage.setItem('redux-store', JSON.stringify(state))

}

export default () => {
    return applyMiddleware(thunk, saveToLocalStorage)(createStore)(appReducer, initialState)
}