import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import {Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
