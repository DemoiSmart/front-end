import React, {  } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Analytics from './Pages/Analytics';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Comment from './Pages/Comment';


function App() {


  return (

    <BrowserRouter>
      <Sidebar>
        <Routes>
        
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/comment' element={<Comment />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productList' element={<ProductList />} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}




export default App;

