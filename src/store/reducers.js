import C from "../shared/constants"
import {combineReducers} from "redux";
import exchangeRateMock from "../mocks/exchangeRate.json"

export const userManagement = (state = "", action) => {
    switch (action.type) {
        case C.LOG_IN:
            return action.payload
        case C.LOG_OUT:
            return ""
        default:
            return state
    }
}

export const transactions = (state = "", action) => {
    switch (action.type) {
        case C.CREATE_TRANSACTION:
            return action.payload
        default:
            return state
    }
}

export const balance = (state = "", action) =>
    (C.UPDATE_BALANCE === action.type) ?
        action.payload :
        state

export const exchangeRate = (state = exchangeRateMock, action) =>
    (C.UPDATE_EXCHANGE_RATE === action.type) ?
        action.payload :
        state


export default combineReducers({
    userManagement,
    transactions,
    balance,
    exchangeRate
})