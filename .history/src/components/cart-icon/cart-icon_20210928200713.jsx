import React from "react";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.scss';

const CartIcon = ()=> (
    <div className='cart-icon'>
        <ShoppingIcon />
        <span className>0</span>
    </div>
)

