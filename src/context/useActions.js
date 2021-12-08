import { useCartActions } from "./actions";

const useActions = (dispatchCartAction) => {
  const {
    addItemToCart,
    removeItemFromCart,
    increaseItemCount,
    decreaseItemCount,
    makeCartEmpty,
  } = useCartActions(dispatchCartAction);

  return {
    addItemToCart,
    removeItemFromCart,
    increaseItemCount,
    decreaseItemCount,
    makeCartEmpty,
  };
};

export default useActions;
