import React, {forwardRef} from "react"

const EcSelect = forwardRef(({data, className, onChange, defaultValue = ""}, ref) => {
    return (
        <div className={`select__container ${className}`}>
            <select ref={ref} defaultValue={defaultValue} className="ec-select" onChange={onChange}>

                {data ? (
                    <>
                        <option className="hide"
                                value=""
                                disabled>
                            Pick one option
                        </option>
                        {data.map(({name, value}) => {
                            <option value={value ? value : name}>
                                {name}
                            </option>
                        })}
                    </>
                ) : (
                    <option className="hide"
                            value=""
                            disabled>
                        No options
                    </option>
                )}
            </select>
        </div>
    )
})
export default EcSelect