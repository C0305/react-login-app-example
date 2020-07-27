import React from "react"


const Table = ({columns, data}) =>
    <table className="table">
        <thead key="thead">
        <tr>{columns.map(column => {
            return (
                <th key={column.columnHeader}>{column.columnHeader}</th>
            )
        })}</tr>
        </thead>
        <tbody>{data.map((row, index) => {
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
        })}</tbody>
    </table>

export default Table