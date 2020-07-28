import C from "../shared/constants"
import fetchMock from "fetch-mock";

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

export const createTransfer = ({fromAccount, toAccount, amount, currency, index}) => dispatch => {
    let date = new Date()
    const res = {
        index,
        fromAccount,
        toAccount,
        amount: {
            currency,
            value: amount
        },
        sentAt: date.toISOString()
    }
    console.log('go to the action')

    fetchMock.post("/api", res);
    fetch("/api", {
        method: 'POST',
        body: JSON.stringify({
            fromAccount,
            toAccount,
            amount
        })
    }).then(r => {
        const response = r.json()
        response.then(data => {
            console.log('inside the then')
            console.log(data)
            dispatch({
                type: C.CREATE_TRANSACTION,
                payload: data
            })
            dispatch({
                type: C.UPDATE_BALANCE,
                payload: {
                    amount: data.amount.value,
                    index: data.index
                }
            })
        })
    })
    fetchMock.restore();
}