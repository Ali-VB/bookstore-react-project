import React from "react";
import './'
const FormInput = ({ handlChang, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handlChang} {...otherProps} /> 
    </div>
)
export default FormInput;