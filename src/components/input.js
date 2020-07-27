import React, {forwardRef} from "react"

const Ecinput = forwardRef(({onBlur, name, placeholder, type = "text", className}, ref) =>
    <div className={`ec-input ${className}`}>
        <input type={type} placeholder={placeholder} name={name} onBlur={onBlur} ref={ref}/>
    </div>
)

export default Ecinput