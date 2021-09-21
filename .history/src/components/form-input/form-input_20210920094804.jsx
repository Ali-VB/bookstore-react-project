import React from "react";
import './'
const FormInput = ({ handleChang, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChang} {...otherProps} /> 

        
    </div>
)
export default FormInput;