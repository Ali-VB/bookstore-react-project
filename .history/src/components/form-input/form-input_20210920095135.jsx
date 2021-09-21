import React from "react";
import './'
const FormInput = ({ handleChang, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChang} {...otherProps} /> 

        {label ? (
            <label className={`${otherProps.value.length ? 'shrink' : ''} from-input-label`}>
                {label}
            </label>
        )
        }
    </div>
)
export default FormInput;