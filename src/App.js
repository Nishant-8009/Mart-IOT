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
    <BrowserRouter basename="/Mart-IOT">
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
