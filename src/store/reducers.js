import C from "../shared/constants"
import {combineReducers} from "redux";

export const eurUsdRate = (state = parseFloat("1.17"), action) =>
    (action.type === C.EUR_USD_RATE) ?
        action.payload :
        state

export const login = (state = "", action) => {
    switch (action.type) {
        case C.LOG_IN:
            return action.payload
        case C.LOG_OUT:
            return ""
        default:
            return state
    }
}


export default combineReducers({
    login
})