import React from "react";
import {withRouter} from "react-router-dom"
import {useSelector} from "react-redux";
import Title from "../../title";
import Card from "../../card";
import Table from "../../table";
import EcPiechart from "../../pie-chart";

const columns = [
    {
        columnHeader: "Account No.",
        prop: "account"
    },
    {
        columnHeader: "Balance",
        prop: "value"
    },
    {
        columnHeader: "Date of Latest Transfer",
        prop: "date"
    }
]


const HomeTable = () => {
    const transactions = useSelector(state => state.transactions)
    const getSumary = () => {
        let auxArr = []
        transactions.forEach(item => {
            let coincidence = false
            auxArr.forEach((row, index) => {
                coincidence = (row.account === item.fromAccount)
                auxArr[index].value += item.amount.value
                if (new Date(item.sentAt) < new Date()) {
                    auxArr[index].date = item.sentAt
                }
            })
            if (!coincidence) {
                auxArr.push({
                    account: item.fromAccount,
                    value: item.amount.value,
                    currency: item.amount.currency,
                    date: item.sentAt
                })
            }
        })

        return auxArr.map(item => {
            let account = item.account.toString()
            return {
                account: `****${account.substr(account.length - 4)}`,
                value: `${item.currency}${item.value}`,
                date: new Date(item.date).toLocaleDateString()
            }
        })

    }
    return (
        <>
            <h4 className="card__title">
                Current Balance
            </h4>
            <Table columns={columns} data={getSumary()}/>
        </>
    )
}

const HomeChart = () => {
    const transactions = useSelector(state => state.transactions)

    return (
        <>
            <EcPiechart type="trans" columns={columns} data={transactions}/>
        </>
    )
}

const Home = () => {
    const username = useSelector(state => state.userManagement);
    const textTitle = `Welcome to your online banking ${username}`


    return (
        <>
            <Title text={textTitle}/>
            <div className="home__container">
                <div className="cards__container">
                    <Card featured={HomeChart()}
                          title="Transaction History"
                          text={"Cras justo odio, dapibus ac facilisis in, egestas eget quam." +
                          " Donec id elit non mi porta gravida at eget metus. " +
                          "Nullam id dolor id dolor id nibh ultricies vehicula " +
                          "ut id elit."}/>
                    <Card img="http://placehold.jp/320x200.png"
                          title="Main Expenses" text="Cras justo odio, dapibus ac facilisis in,
                          egestas eget quam.
                          Donec id elit non mi porta gravida at eget metus.
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                          Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                          Donec id elit non mi porta gravida at eget metus.
                          Nullam id dolor id nibh ultricies vehicula ut id elit.
                          Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                          Donec id elit non mi porta gravida at eget metus.
                          Nullam id dolor id nibh ultricies vehicula ud id dolor id elit.
                          Cras justo odio, dapibus ac facilisis in eegestas eget quam.
                          Donec id elit non mi porta gravida at eget metus.
                          Nullam id dolor id nibh ultricies vehicula ut id elit"/>

                    <Card body={HomeTable()}>
                    </Card>

                </div>
            </div>
        </>
    );
}

export default withRouter(Home)