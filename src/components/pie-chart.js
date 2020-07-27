import React, {useState} from "react"
import {PieChart} from 'react-minimal-pie-chart';

const intToHexColor = (i) => {
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "#" + "00000".substring(0, 6 - c.length) + c;
}

const EcPiechart = ({type, data}) => {
    const [selected, setSelected] = useState();
    const [focused, setFocused] = useState();
    let pieData = []

    if (type === "trans") {
        let eurUsd = 1.23
        data.forEach(({toAccount, amount: {currency, value}}) => {
            let findAccount = false
            pieData.forEach((item, index) => {
                if (item.title === String(toAccount)) {
                    findAccount = true
                    pieData[index].value += currency === "€" ? eurUsd * value : value
                }
            })

            if (!findAccount) {
                pieData.push({
                    title: String(toAccount),
                    value: currency === "€" ? eurUsd * value : value,
                    color: intToHexColor(toAccount)
                })
            }

        })
    } else {
        pieData = data
    }

    pieData = pieData.map((entry, i) => {
        let result = entry;
        if (focused === i) {
            result = {
                ...result,
                color: 'grey',
            };
        }
        return result;
    });

    const segmentsStyle = {
        transition: 'stroke .3s',
        cursor: 'pointer'
    }

    const labelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
        fill: '#FFF'
    }

    return (
        <PieChart radius={40}
                  lineWidth={75}
                  label={({dataEntry}) => `#${dataEntry.title}`}
                  labelStyle={labelStyle}
                  segmentsStyle={(index) => {
                      return index === selected
                          ? {...segmentsStyle, strokeWidth: 35}
                          : segmentsStyle;
                  }}
                  segmentsTabIndex={1}
                  onKeyDown={(event, index) => {
                      // Enter keypress
                      if (event.keyCode === 13) {
                          action('CLICK')(event, index);
                          console.log('CLICK', {event, index});
                          setSelected(selected === index ? undefined : index);
                      }
                  }}
                  onFocus={(_, index) => {
                      setFocused(index);
                  }}
                  onBlur={() => setFocused(undefined)}
                  data={pieData}/>
    )
}

export default EcPiechart