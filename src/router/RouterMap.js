import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from 'pages/login/Login';
import Home from 'pages/home/Home';
import NotFound from 'pages/notFound/NotFound';
import ProductDetail from 'pages/product/ProductDetail';
import MerchantRouter from 'pages/merchantRouter/MerchantRouter';
import Register from 'pages/register/Register';

const userLogin = true;

export default function RouterMap() {
  return (
    <Routes>
      <Route
        path="/"
        element={userLogin ? <Navigate to="/home" /> : <Navigate to="/login" />}
      />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/merchant/:type" element={<MerchantRouter />} />
      <Route exact path="/products/:id" element={<ProductDetail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
