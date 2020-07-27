import React from "react"
import {PieChart} from 'react-minimal-pie-chart';
import {useSelector} from "react-redux";

const intToHexColor = (i) => {
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "#" + "00000".substring(0, 6 - c.length) + c;
}

const EcPiechart = ({type, data}) => {
    const exchangeRate = useSelector(state => state.exchangeRate.eur)

    let pieData

    if (type === "trans") {

        let auxArr = []

        data.forEach(item => {
            let coincidence = false
            auxArr.forEach((row, index) => {
                coincidence = (row.title === String(item.toAccount))
                if (item.amount.currency === "€") {
                    auxArr[index].value += (item.amount.value / exchangeRate)
                } else {
                    auxArr[index].value += item.amount.value
                }
            })
            if (!coincidence) {
                auxArr.push({
                    title: String(item.toAccount),
                    value: item.amount.currency === "€" ?
                        (item.amount.value / exchangeRate) :
                        item.amount.value,
                    color: intToHexColor(item.toAccount)
                })
            }
        })

        pieData = auxArr.map(item => {
            item.title = `****${item.title.substr(item.title.length - 4)}`
            item.value = Number(parseFloat(item.value).toFixed(2))
            return item
        })
    } else {
        pieData = data
    }


    const segmentsStyle = {
        cursor: 'pointer'
    }

    const labelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
        fill: '#FFF',
        cursor: 'pointer'
    }

    return (
        <PieChart radius={40}
                  lineWidth={75}
                  label={({dataEntry}) => `${dataEntry.title}`}
                  labelStyle={labelStyle}
                  segmentsStyle={segmentsStyle}
                  segmentsTabIndex={1}
                  data={pieData}/>
    )
}

export default EcPiechart