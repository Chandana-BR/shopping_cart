/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import axiosInstance from "../../utils/axiosInstance";
import { StarIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Home() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  const loadProducts = useCallback(async () => {
    try {
      const res = await axiosInstance.get("660/products");
      setProducts(res);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  // component did mount
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="max-w-7xl mx-auto px-2">
      {products.map((product) => (
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

            <section
              aria-labelledby="information-heading"
              className="mt-2 flex-1"
            >
              <h3 id="information-heading">{product.description}</h3>

              <p className="text-2xl text-gray-900">
                {new Intl.NumberFormat("en-IN", {
                  currency: "INR",
                  style: "currency",
                }).format(product.price)}
              </p>

              {/* Reviews */}
            </section>

            <button
              type="button"
              className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to bag
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
