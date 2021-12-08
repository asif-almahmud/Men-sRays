export const useCartActions = (dispatchCartAction) => {
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCart = (item) => {
    dispatchCartAction({ type: "REMOVE_ITEM", item: item });
  };

  const increaseItemCount = (item) => {
    dispatchCartAction({
      type: "INCREASE_COUNT",
      item: { ...item, count: item.count + 1 },
    });
  };

  const decreaseItemCount = (item) => {
    dispatchCartAction({
      type: "DECREASE_COUNT",
      item: { ...item, count: item.count - 1 },
    });
  };

  const makeCartEmpty = () => {
    dispatchCartAction({ type: "EMPTY_CART" });
  };

  return {
    addItemToCart,
    removeItemFromCart,
    increaseItemCount,
    decreaseItemCount,
    makeCartEmpty,
  };
};
