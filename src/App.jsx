import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';  
import React from 'react';
import FreeComponent from './components/FreeComponent';
import Menu from './components/Menu';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Navigation from './components/Navigation'

function App() {
 

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<FreeComponent />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </>
     
  )
}

export default App


