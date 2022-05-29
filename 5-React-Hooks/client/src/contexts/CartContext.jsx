import React, {createContext, useContext, useReducer} from "react";

import {ADD_PRODUCT, REMOVE_PRODUCT, shopReducer} from "./Reducers";
import {ProductContext} from "./ProductContext";

export const CartContext = createContext({
  cart: [],
  addProductToCart: product => {
    // This is intentional
  },
  removeProductFromCart: productId => {
    // This is intentional
  }
});

const CartContextProvider = ({children}) => {
  const products = useContext(ProductContext);
  const [cartState, dispatch] = useReducer(shopReducer, {cart: []});

  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({type: ADD_PRODUCT, product: product});
    }, 700);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      dispatch({type: REMOVE_PRODUCT, productId: productId});
    }, 700);
  };

  return (
    <CartContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;