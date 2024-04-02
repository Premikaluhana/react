import React from 'react';
import './App.css'
import Nav from './components/nav'
import Home from './pages/Home'
import About from './pages/About'
import Newslatter from './pages/Newslatter'
import { BrowserRouter, Router ,Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/newslatter' element={<Newslatter></Newslatter>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
