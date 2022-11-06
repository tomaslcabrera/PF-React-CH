import React from 'react';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { CartProvider } from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';


const App=()=> {
  return (
  <>
  <CartProvider>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/detail/:productId' element={ <ItemDetailContainer />} />   
    </Routes>
  </BrowserRouter>
  </CartProvider>
  </>
  );
}

export default App;