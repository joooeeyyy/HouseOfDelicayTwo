/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  return (
    <ProductContext.Provider
      value={{currentCategoryIndex,setCurrentCategoryIndex}}
    >
      {children}
    </ProductContext.Provider>
  );
};
