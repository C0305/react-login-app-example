import C from "../shared/constants"

export const login = ({username}) => dispatch => {
    dispatch({
        type: C.LOG_IN,
        payload: username
    })
}

export const logOut = dispatch => {
    dispatch({type: C.LOG_OUT})
}


export const updateExchangeRate = dispatch => {
    const url = "https://openexchangerates.org/api/latest.json?app_id=edcb3ee85c584de396f486a46031eab0"
    fetch(url).then(res => {
        if (res.base === "USD") {
            dispatch({
                type: C.UPDATE_EXCHANGE_RATE,
                payload: {
                    eur: res.rates.EUR,
                    date: new Date().toISOString().slice(0, 10)
                }
            })
        }
    }).catch(error => console.log(error))
}