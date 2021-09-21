import React from 'react'
import './form-input.scss'

const FormInput = ({ handleChange, abel, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />

        {label ? (
            <label
                className={`${otherProps.value.length ? 'shrink' : ''
                    } from-input-label`}
            >
                {label}
            </label>
        ) : null}

    </div>
)
export default FormInput
