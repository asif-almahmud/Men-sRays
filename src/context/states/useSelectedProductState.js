import { useState } from "react";

export const useSelectedProductState = () => {
  const [selectedProduct, setSelectedProduct] = useState("");

  return { selectedProduct, setSelectedProduct };
};
