import React from "react"

const Table = ({columns, data}) => {

    const tColumns = columns.map(column => {
        return (
            <th key={column.columnHeader}>{column.columnHeader}</th>
        )
    })

    const rowArr = data.map((row, index) => {
        return (
            <tr key={index}>
                {columns.map(({columnHeader, prop}, index) => {
                    return (
                        <td key={`${columnHeader}-${index}-cell`}>
                            {row[prop]}
                        </td>
                    )
                })}
            </tr>
        )
    })

    return (
        <table className="table">
            <thead key="thead">
            <tr>{tColumns}</tr>
            </thead>
            <tbody>{rowArr}</tbody>
        </table>
    )
}

export default Table