// Cart Initial State

export const initialCartState = {
  items: [],
  totalAmount: 0,
};

// Cart Reducer

export const cartReducer = (state, action) => {
  let filteredCartState = [],
    updatedItems,
    updatedTotalAmount,
    reducedCartState;

  // { productName: "product1", productImage: product1, price: 75,count:0, },

  switch (action.type) {
    case "ADD_ITEM":
      filteredCartState = state.items.filter(
        (item) => item.productName !== action.item.productName
      );
      updatedItems = [...filteredCartState, action.item];
      updatedTotalAmount = updatedItems.reduce((total, current) => {
        return total + current.price * current.count;
      }, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "REMOVE_ITEM":
      filteredCartState = state.items.filter(
        (item) => item.productName !== action.item.productName
      );
      updatedItems = [...filteredCartState];
      updatedTotalAmount = updatedItems.reduce((total, current) => {
        return total + current.price * current.count;
      }, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "INCREASE_COUNT":
      reducedCartState = state.items.reduce((acc, elem) => {
        elem.productName !== action.item.productName && acc.push(elem);
        elem.productName === action.item.productName && acc.push(action.item);
        return acc;
      }, []);
      updatedItems = [...reducedCartState];
      updatedTotalAmount = updatedItems.reduce((total, current) => {
        return total + current.price * current.count;
      }, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "DECREASE_COUNT":
      reducedCartState = state.items.reduce((acc, elem) => {
        elem.productName !== action.item.productName && acc.push(elem);
        elem.productName === action.item.productName && acc.push(action.item);
        return acc;
      }, []);
      updatedItems = [...reducedCartState];
      updatedTotalAmount = updatedItems.reduce((total, current) => {
        return total + current.price * current.count;
      }, 0);
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "EMPTY_CART":
      return {
        items: [],
        totalAmount: 0,
      };

    default:
      return { ...state };
  }
};
