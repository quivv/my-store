import React from 'react';
import './App.css';
import {About, Contact, Product, Home, Header, Footer, ProductDetail} from './components';
import {Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
