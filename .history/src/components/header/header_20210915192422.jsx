import React from "react";
import './header.scss';
import { Link } from 'react-router-dom'
import { eactComponent as Logo } from '../../../src/assets/bookStoreLogo_1.svg'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" >
                <Logo className="logo" />
            </Link>
        </div>
    )
}

export default Header;