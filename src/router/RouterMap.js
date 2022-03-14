import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from 'pages/login/Login';
import Home from 'pages/home/Home';
import NotFound from 'pages/notFound/NotFound';
import ProductDetail from 'pages/product/ProductDetail';

const userLogin = true;

export default function RouterMap() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={userLogin ? <Navigate to='/home'/> : <Navigate to='/login'/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route exact path='/products/:id' element={<ProductDetail />}/>
            <Route path='/*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}
