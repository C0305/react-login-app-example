import C from "../shared/constants"
import {combineReducers} from "redux";
import {transactions as transactionsMock} from "../mocks/transactionHistory.json"
import {balance as balanceMock} from "../mocks/accountBalance.json"
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

export const transactions = (state = transactionsMock, action) => {
    switch (action.type) {
        case C.CREATE_TRANSACTION:
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}

export const balance = (state = balanceMock, action) => {
    switch (action.type) {
        case C.UPDATE_BALANCE:
            return state.map((item, index) => {
                if (index === action.payload.index) {
                    const auxObj = JSON.parse(JSON.stringify(item))
                    console.log(auxObj)
                    auxObj.balance.value = parseFloat(
                        action.payload.amount - auxObj.balance.value
                    ).toFixed(2)
                    return auxObj
                }
                return item
            })

        default:
            return state
    }
}


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