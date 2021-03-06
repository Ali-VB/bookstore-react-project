import CartActionTypes from './cart.types'
const INITIAL_STATE = {
    hidden: true,
    cartItem:[]

};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}
export default cartReducer;