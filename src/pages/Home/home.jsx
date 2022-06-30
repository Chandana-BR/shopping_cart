/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext, useEffect } from "react";
import Product from "../../components/Product";
import { CartContext } from "../../context/cartContext";
import { ProductsContext } from "../../context/productsContext";

function Home() {
  const { products, loadProducts } = useContext(ProductsContext);
  const {
    cart,
    cartState,
    loading,
    loadCart,
    updateCart,
    deleteCartItem,
    addToCart,
  } = useContext(CartContext);

  const loadData = useCallback(async () => {
    try {
      await Promise.all([loadProducts(), loadCart()]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // component did mount
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="max-w-7xl mx-auto px-2">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.productId === product.id);
        const isAdding = cartState.some(
          (item) => item.productId === product.id && item.type === "add"
        );
        const isUpdating = cartState.some(
          (item) => item.productId === product.id && item.type === "update"
        );
        const isDeleting = cartState.some(
          (item) => item.productId === product.id && item.type === "update"
        );
        return (
          <Product
            key={product.id}
            cartItem={cartItem}
            product={product}
            addToCart={addToCart}
            updateCart={updateCart}
            deleteCartItem={deleteCartItem}
            isLoading={isAdding}
            isUpdating={isUpdating}
            isDeleting={isDeleting}
          />
        );
      })}
    </div>
  );
}

export default Home;
