/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import axiosInstance from "../utils/axiosInstance";
import { AuthContext } from "./authContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [cartState, setCartState] = useState([]);

  const loadCart = useCallback(async () => {
    try {
      const res = await axiosInstance.get("660/cart");
      setCart(res);
    } catch (error) {}
  }, []);

  const addToCart = useCallback(async (product) => {
    try {
      // object of cart
      setCartState((val) => [
        ...val,
        { productId: product.id, state: "loading", type: "add" },
      ]);
      const res = await axiosInstance.post("http://localhost:3000/660/cart", {
        productId: product.id,
        quantity: 1,
        userId: user.user.id,
      });
      // added cart object into existing array
      setCart((val) => [...val, res]);
    } catch (error) {
    } finally {
      setCartState((val) =>
        val.filter((x) => !(x.productId !== product.id && x.type === "add"))
      );
    }
  }, []);

  const updateCart = useCallback(async (cartItem) => {
    try {
      setCartState((val) => [
        ...val,
        { productId: cartItem.productId, state: "loading", type: "update" },
      ]);
      const res = await axiosInstance.put(
        `http://localhost:3000/660/cart/${cartItem.id}`,
        cartItem
      );
      setCart((val) => {
        const index = val.findIndex((x) => x.id === cartItem.id);
        return [...val.slice(0, index), res, ...val.slice(index + 1)];
      });
    } catch (error) {
    } finally {
      setCartState((val) =>
        val.filter(
          (x) => !(x.productId !== cartItem.productId && x.type === "update")
        )
      );
    }
  }, []);

  const deleteCartItem = useCallback(async (cartItem) => {
    try {
      setCartState((val) => [
        ...val,
        { productId: cartItem.productId, state: "loading", type: "delete" },
      ]);
      await axiosInstance.delete(
        `http://localhost:3000/660/cart/${cartItem.id}`
      );
      setCart((val) => {
        const index = val.findIndex((x) => x.id === cartItem.id);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });
    } catch (error) {
    } finally {
      setCartState((val) =>
        val.filter(
          (x) => !(x.productId !== cartItem.productId && x.type === "delete")
        )
      );
    }
  }, []);

  const value = useMemo(
    () => ({
      cart,
      cartState,
      loadCart,
      addToCart,
      updateCart,
      deleteCartItem,
    }),
    [cart, cartState]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
