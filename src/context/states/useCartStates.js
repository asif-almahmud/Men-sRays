import { useState, useEffect, useReducer } from "react";
import useActions from "../useActions";
import useReducers from "../useReducers";

export const useCartStates = () => {
  const [showCart, setShowCart] = useState(false);

  const { cartState, dispatchCartAction } = useReducers();

  const {
    addItemToCart,
    removeItemFromCart,
    increaseItemCount,
    decreaseItemCount,
    makeCartEmpty,
  } = useActions(dispatchCartAction);

  const cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart,
    removeItemFromCart,
    increaseItemCount,
    decreaseItemCount,
    makeCartEmpty,
  };

  return { showCart, setShowCart, cart };
};
