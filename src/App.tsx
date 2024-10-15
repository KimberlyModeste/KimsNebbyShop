import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {  Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
// import Background from './Components/Background';
import FullProduct from './Pages/FullProduct';
import Menubar from './Components/Menubar';

function App() {
  return (
    <div className="App">
      {/* <Background /> */}
      <Menubar  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/full-page/:name' element={<FullProduct />} />
      </Routes>
    </div>
  );
}

export default App;
