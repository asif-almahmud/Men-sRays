import { useReducer } from "react";
import { initialCartState, cartReducer } from "./reducers";

const useReducers = () => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  return { cartState, dispatchCartAction };
};

export default useReducers;
