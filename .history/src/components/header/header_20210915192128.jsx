import React from "react";
import './header.scss';
import {Link} from 'react-router-dom'
import {reactComponent as Logo} from '../../assets/bookStoreLogo_1.svg'

const Header = () => {
    return (
        <div className="header">
<Link> 
<Logo></Logo>
</Link>
        </div>
    )
}

export default Header;