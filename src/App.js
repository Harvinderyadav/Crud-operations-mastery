import logo from './logo.svg';
import {
  BrowserRouter ,Routes,
  Route,} from "react-router-dom";
  import './App.css';
  import Read from './Component/Read'
import Create from './Component/Create';
import Update from './Component/Update';

import { Component } from 'react';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Create/>}/>
      <Route  path="/read" element={<Read/>}/>
      <Route  path="/update" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
