import React from 'react';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import ContactPage from './components/contact/contact';
import Error from './components/pages/error';
import HomePage from './components/pages/home';
import Navbar from './components/Header/header';
import Products from './components/pages/products';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Mart-IOT/home' element={<HomePage/>} />
      <Route path='/Mart-IOT/products' element={<Products/>} />
      <Route path='/Mart-IOT/contact' element={<ContactPage/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
