import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';

const id = false;

export default function RouterMap() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={id ? <Navigate to='/home'/> : <Navigate to='/login'/>}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}
