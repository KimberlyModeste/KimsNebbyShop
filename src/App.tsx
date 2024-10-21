import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {  Routes, Route } from 'react-router-dom';
// import Background from './Components/Background';

import Home from './Pages/Home';
import FullProduct from './Pages/FullProduct';
import Menubar from './Components/Menubar';
import New from './Pages/New';
import Artisphere from './Pages/Artisphere';
import Cart from './Pages/Cart';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      {/* <Background /> */}
      <Menubar  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/full-page/:name' element={<FullProduct />} />
        <Route path='/new' element={<New />} />
        <Route path='/artishpere' element={<Artisphere />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
