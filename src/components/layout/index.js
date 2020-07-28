import React, {useEffect} from 'react';
import Header from "./header";
import {useDispatch, useSelector} from "react-redux";
import {updateExchangeRate} from "../../store/actions";

function Layout({children}) {
    const exchangeRate = useSelector(state => state.exchangeRate);
    const dispatch = useDispatch()

    useEffect(() => {
        if (exchangeRate.date !== new Date().toISOString().slice(0, 10))
            dispatch(updateExchangeRate)
    }, [])

    return (
        <>
            <div className="layout">
                <Header/>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout