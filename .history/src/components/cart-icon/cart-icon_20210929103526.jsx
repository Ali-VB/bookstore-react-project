import React from "react";
import { connect } from "react-redux";
import {to}
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count" > 0 </span>
    </div>
)
export default CartIcon;

