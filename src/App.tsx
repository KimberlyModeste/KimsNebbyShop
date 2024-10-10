import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {  Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
// import Background from './Components/Background';
import FullProduct from './Pages/FullProduct';

function App() {
  return (
    <div className="App">
      {/* <Background /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/full-page/:name' element={<FullProduct />} />
      </Routes>
    </div>
  );
}

export default App;
