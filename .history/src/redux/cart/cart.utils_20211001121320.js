export const addItemToCart=(cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id ===cartItemToAdd.id);
    
}