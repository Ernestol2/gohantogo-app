import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';  
import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Navigation from './components/Navigation'
import CheckoutPage from './components/CheckoutPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import Checkout from './components/CheckoutForm/Checkout';


function App() {

  const [{user}, dispatch] = useStateValue();
  

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])


  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/checkout-page" element={<CheckoutPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
     
  )
}

export default App


