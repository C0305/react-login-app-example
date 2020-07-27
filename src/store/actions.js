import C from "../shared/constants"

export const login = username => dispatch => {
    dispatch({
        type: C.LOG_IN,
        payload: username
    })
}

export const logOut = dispatch => {
    dispatch({type: C.LOG_OUT})
}


export const usdEuroRate = dispatch => {

    // TODO: I need to fix the fetch issue
    const getData = async () => {
        const response = await fetch("https://exchangeratesapi.io/")
        const data = response.json()
        return data.rates.usd
    }
    getData().then(rate => dispatch({
        type: C.EUR_USD_RATE,
        payload: rate
    })).catch(error => console.log(error))


}