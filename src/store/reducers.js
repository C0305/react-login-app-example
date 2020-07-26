import C from "../shared/constants"
import {combineReducers} from "redux";

export const eurUsdRate = (state = parseFloat("1.17"), action) =>
    (action.type === C.EUR_USD_RATE) ?
        action.payload :
        state

export const login = (state = "", action) =>
    (action.type === C.LOG_IN) ?
        action.payload :
        state

export default combineReducers({
    login
})