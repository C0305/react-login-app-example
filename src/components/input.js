import React, {forwardRef} from "react"

const Ecinput = ({onBlur, name, placeholder, type = "text", className, minLength}, ref) => {
    return (
        <div className={`ec-input ${className}`}>
            <input type={type} placeholder={placeholder} minLength={minLength} name={name} onBlur={onBlur} ref={ref}/>
        </div>
    )

}


export default forwardRef(Ecinput)