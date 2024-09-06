import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {  Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Background from './Components/Background';

function App() {
  return (
    <div className="App">
      {/* <Background /> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
