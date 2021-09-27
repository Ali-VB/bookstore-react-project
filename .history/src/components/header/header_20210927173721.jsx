import React from "react";
import './header.scss';
import { Link } from 'react-router-dom'
import 
import { ReactComponent as Logo } from '../../assets/bookStoreLogo_1.svg'
import { auth } from "../../firebase/firebase.Utils";

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className='logo-container' to="/" >
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className="option" to="/signin">
                            SIGN IN
                        </Link>
                }
            </div>
        </div>
    )
}

export default Header;