import React, { memo } from "react";
import Reviews from "../Reviews";
import { currency } from "../../utils";
import Button from "../Button";

function Product({
  product,
  cartItem,
  addToCart,
  updateCart,
  deleteCartItem,
  isAdding,
  isUpdating,
  isDeleting,
}) {
  return (
    <div
      key={product.id}
      className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8 py-4"
    >
      <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden col-span-3">
        <img
          src={product.image}
          alt={product.title}
          className="object-center object-cover"
        />
      </div>
      <div className="col-span-9 flex flex-col h-full">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
          {product.title}
        </h2>

        <section aria-labelledby="information-heading" className="mt-2 flex-1">
          <h3 id="information-heading">{product.description}</h3>

          <p className="text-2xl text-gray-900">{currency(product.price)}</p>

          <Reviews {...product.rating} />
        </section>

        {cartItem ? (
          <div className="flex items-center py-4">
            <Button
              type="button"
              className="flex-1"
              disabled={isUpdating}
              onClick={() =>
                updateCart({
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                })
              }
            >
              +
            </Button>
            <p className="px-5 text-3xl text-center font-bold flex-1">
              {cartItem.quantity}
            </p>
            <Button
              type="button"
              className="flex-1"
              disabled={isDeleting}
              onClick={() => {
                if (cartItem.quantity > 1) {
                  updateCart({
                    ...cartItem,
                    quantity: cartItem.quantity - 1,
                  });
                } else {
                  deleteCartItem(cartItem);
                }
              }}
            >
              -
            </Button>
          </div>
        ) : (
          <Button disabled={isAdding} onClick={() => addToCart(product)}>
            Add to bag
          </Button>
        )}
      </div>
    </div>
  );
}

export default memo(Product);
