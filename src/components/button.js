import React from "react"

const EcButton = ({disabled = false, text = "", type, className = "", onClick}) =>
    <button type={type} className={`button ${className}`} disabled={disabled} onClick={() => onClick}>
        <span>{text}</span>
    </button>


export default EcButton