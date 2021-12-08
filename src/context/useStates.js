import { useCartStates, useSelectedProductState } from "./states";

const useStates = () => {
  const { showCart, setShowCart, cart } = useCartStates();
  const { selectedProduct, setSelectedProduct } = useSelectedProductState();

  return { showCart, setShowCart, cart, selectedProduct, setSelectedProduct };
};

export default useStates;
