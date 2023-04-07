import React from 'react';
import { Routes, Route } from 'react-router-dom';  
import Navigation from './components/Navigation'
import MainPage from './components/MainPage';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FreeComponent from './components/FreeComponent';
import Task from './components/Task';
import Footer from './components/Footer';

function App() {
 

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<FreeComponent />} />
        <Route path="/tasks" element={<Task />} />
      </Routes>
      <Footer />
    </>
     
  )
}

export default App


