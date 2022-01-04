import {
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  CLEAR_CART, 
  INCREASE_QUANTITY, 
  DECREASE_QUANTITY,
  PRODUCT_ATTRIBUTE
} from '../constants';

const initState ={
   cartItems: [],
   totalPrice: 0,
   productAttribute:[]
}

const cartReducer = (state = initState, action) => {
   switch (action.type) {
       case ADD_TO_CART:
         return {
           ...state,
           cartItems: [...state.cartItems, action.payload],
           totalPrice: state.totalPrice + action.payload.price,
         };
         case INCREASE_QUANTITY:
           return {
             ...state,
             cartItems: state.cartItems.map(item =>
                item.product.id === action.payload.productId ? {
                   ...item,
                   quantity: item.quantity + 1
                } : item
             )
          };
        case DECREASE_QUANTITY:
         return {
           ...state,
           cartItems: state.cartItems.map(item =>
            item.product.id === action.payload.productId ?{
               ...item,
               quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
              } : item
           )
        };
       case REMOVE_FROM_CART:
         return {
             ...state,
             cartItems: state.cartItems.filter(item => item.product.id != action.payload.productId)
         };
       case CLEAR_CART:
         return {
           ...state,
           cartItems: []
         };
       default:
         return state
   }
}

export default cartReducer