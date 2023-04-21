import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';  
import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Navigation from './components/Navigation'
import CheckoutPage from './components/CheckoutPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
 

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/checkout-page" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </>
     
  )
}

export default App


