import React from "react";
import './header.scss';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/bookStoreLogo_1.svg'

const Header = () => {
    return (
        <div className="header">
            <Link className to="/" >
                <Logo className="logo" />
            </Link>
        </div>
    )
}

export default Header;