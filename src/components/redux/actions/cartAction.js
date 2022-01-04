import {
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  CLEAR_CART, 
  DECREASE_QUANTITY, 
  INCREASE_QUANTITY,
} from '../constants';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity: 1,
    }
  };
};


export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId,
    }
  };
};
export const increaseQuantity = (quantity,productId) => ({
   type: INCREASE_QUANTITY,
   payload: {
    quantity,
    productId
   }

});

export const decreaseQuantity = (quantity,productId) =>({
   type: DECREASE_QUANTITY,
   payload: {
    quantity,
    productId
   }
});

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};






