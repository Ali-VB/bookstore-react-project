import React from 'react'
import './collection-item.scss'
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ id, name, price, imageUrl, addItem }) => (
    <div className='collection-item'>
        <div className="image"
            style={{ backgroundImage: `Url(${imageUrl})` }} />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}$</span>
        </div>
        <CustomButton inverted> Add to Cart</CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);