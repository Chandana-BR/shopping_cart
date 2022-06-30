/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useCallback, useMemo } from "react";
import axiosInstance from "../utils/axiosInstance";

export const ProductsContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async () => {
    const res = await axiosInstance.get("660/products");
    setProducts(res);
  }, []);

  const value = useMemo(
    () => ({
      products,
      loadProducts,
    }),
    [products]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
