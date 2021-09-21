import React from "react";
import './custom-button.scss';

const CustomButton = ({ children, ISG...otherProps})=> (
    <button className='custom-button' {...otherProps}>
    {children}
    </button>
)
export default CustomButton;