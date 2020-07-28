import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router";

import {createTransfer, updateExchangeRate} from "../../store/actions";
import Card from "../card";
import EcPiechart from "../pie-chart";
import Ecinput from "../input";
import EcSelect from "../select";
import Title from "../title";
import EcButton from "../button";
import Table from "../table";

const TransferForm = (selectData) => {

    const balance = useSelector(state => state.balance)
    const destAccount = useRef()
    const amount = useRef()
    const account = useRef()
    const dispatch = useDispatch()

    const cleanForm = () => {
        destAccount.current.value = ""
        amount.current.value = ""
        account.current.value = ""
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        let fromAccount = parseInt(account.current.value)
        let money = parseFloat(amount.current.value).toFixed(2)
        let toAccount = parseInt(destAccount.current.value)
        if (!isNaN(money) && !isNaN(fromAccount) && !isNaN(toAccount) && String(toAccount).length >= 8) {
            let index = balance.findIndex(item => {
                return item.account === fromAccount
            })
            if (balance[index].balance.value > money && money < 1000000) {
                const payload = {
                    fromAccount,
                    toAccount,
                    amount: money,
                    currency: balance[index].balance.currency,
                    index
                }
                dispatch(createTransfer(payload))
                cleanForm()
            }
        }
    }

    return (
        <form onSubmit={handleOnSubmit} className="is-full-width">
            <Title text="Create new transfer"/>
            <EcSelect ref={account} data={selectData} className="is-full-width ec-select--space-on-sides"/>
            <Ecinput name="toAccount"
                     type="number"
                     ref={destAccount}
                     placeholder="Destination account"
                     className="is-full-width ec-input--space-on-sides"/>

            <Ecinput name="amount"
                     type="number"
                     placeholder="Amount"
                     ref={amount}
                     className="is-full-width ec-input--space-on-sides"/>

            <div className="is-full-width is-padding-top-2">
                <div className="is-80-width is-80-width--center is-flex is-flex--row-reverse">
                    <EcButton type="button" onClick={() => cleanForm} text="Cancel"/>
                    <EcButton type="submit" className={"blue-btn"} text="Transfer"/>
                </div>
            </div>
        </form>
    )
}

const Transfer = () => {
    const dispatch = useDispatch()
    const exchangeRate = useSelector(state => state.exchangeRate);
    const transactions = useSelector(state => state.transactions)
    const balance = useSelector(state => state.balance)

    const accounts = balance.map(({account, balance}) => {
        return {
            name: `****${account.toString().substr(account.toString().length - 4)} - ${balance.currency}${balance.value}`,
            value: account
        }
    })

    const accountsData = accounts.map(account => {
        return transactions.filter(item => {
            return item.fromAccount === account.value
        }).map(trans => {
            let newObj = JSON.parse(JSON.stringify(Object.assign(trans, trans.amount)))
            newObj.sentAt = (new Date(trans.sentAt)).toLocaleDateString()
            newObj.value = newObj.currency + newObj.value
            delete newObj.amount
            newObj.fromAccount = `****${newObj.fromAccount.toString().substr(newObj.fromAccount.toString().length - 4)}`
            return newObj
        })
    })


    const columns = [
        {
            columnHeader: "Origin account",
            prop: "fromAccount"
        },
        {
            columnHeader: "Destination account",
            prop: "toAccount"
        },
        {
            columnHeader: "Transfer date",
            prop: "sentAt"
        },
        {
            columnHeader: "amount",
            prop: "value"
        }
    ]

    useEffect(() => {
        if (exchangeRate.date !== new Date().toISOString().slice(0, 10))
            dispatch(updateExchangeRate)
    }, [])

    return (
        <>
            <div className="transfer">
                <div className="transfer__container transfer__container--max-h-500">
                    <div className="transfer__container__item transfer__container__item--grid">
                        <Card body={TransferForm(accounts)}/>
                    </div>
                    <div className="transfer__container__item">
                        <EcPiechart type="trans" data={transactions}/>
                    </div>
                </div>
                <div className="is-full-width">
                    {accountsData.map((row, index) => {
                        return (
                            <div key={index} className="is-full-width">
                                <Table data={row} columns={columns}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default withRouter(Transfer)