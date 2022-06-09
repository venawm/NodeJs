import React from 'react';
import { BrowserRouter,Routes,Route, Router } from "react-router-dom";
import Productspage from './main/productspage/productspage';
import Navbar from './header/navbar';
import AddProduct from './main/addproduct/addProduct'

function App() {

  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
    <Routes>
      <Route path="Products" element={<Productspage />} />
      <Route path='AddProduct' element={<AddProduct/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
