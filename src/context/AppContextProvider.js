import React, { useState } from "react";
import { AppContext } from "./AppContext";
import useStates from "./useStates";

export const AppContextProvider = (props) => {
  const { showCart, setShowCart, cart, selectedProduct, setSelectedProduct } =
    useStates();

  return (
    <AppContext.Provider
      value={{
        showCart,
        setShowCart,
        cart,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
