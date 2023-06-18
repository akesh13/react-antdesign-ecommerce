import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Home/Home";
import Category from "../Pages/Category/Category";
import Products from "../Products/Products";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/:categoryId" element={<Category />} />
    </Routes>
  );
};

export default AppRoutes;
