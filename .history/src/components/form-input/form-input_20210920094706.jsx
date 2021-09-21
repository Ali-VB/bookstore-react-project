import React from "react";
import './'
const FormInput = ({ handlChang, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handlChang} {...other} /> 
    </div>
)
export default FormInput;