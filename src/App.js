import React from 'react';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App=()=> {
  return (
  <> 
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/category/:categoryId' element={<ItemListContainer />}/>
      <Route path='/detail/:productId' element={ <ItemDetailContainer />} />
      
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;