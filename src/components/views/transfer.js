import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router";

import {updateExchangeRate} from "../../store/actions";

const Transfer = () => {
    const dispatch = useDispatch()
    const exchangeRate = useSelector(state => state.exchangeRate);

    useEffect(() => {
        if (exchangeRate.date !== new Date().toISOString().slice(0, 10))
            dispatch(updateExchangeRate)
    }, [])
    return (
        <div className="login__container">
            <h1>Login</h1>
        </div>
    )
}


export default withRouter(Transfer)