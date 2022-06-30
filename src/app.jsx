import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { ProductProvider } from "./context/productsContext";
import AuthLayout from "./layouts/authLayout";
import MainLayout from "./layouts/mainLayout";
// import Home from "./pages/Home/home";
// import Login from "./pages/Login/login";
// import Register from "./pages/Register/register";
// import Products from "./pages/Products/products";
// import Favorites from "./pages/Favorites/favorites";
// import Categories from "./pages/Categories/categories";

const Home = lazy(() => import("./pages/Home/home"));
const Login = lazy(() => import("./pages/Login/login"));
const Register = lazy(() => import("./pages/Register/register"));
const Products = lazy(() => import("./pages/Products/products"));
const Favorites = lazy(() => import("./pages/Favorites/favorites"));
const Categories = lazy(() => import("./pages/Categories/categories"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProductProvider>
            <CartProvider>
              <MainLayout />
            </CartProvider>
          </ProductProvider>
        }
      >
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
