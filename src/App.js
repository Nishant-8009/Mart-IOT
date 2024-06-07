import React from 'react';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Error from './components/pages/error';
import HomePage from './components/pages/home';
import Navbar from './components/Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
    
  );
};

export default App;
