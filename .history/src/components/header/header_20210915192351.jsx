import React from "react";
import './header.scss';
import { Link } from 'react-router-dom'
import { reactComponent as Logo } from '../../../src/assets/'

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