import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Secao from './components/Secao.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
    <Secao />
    <Footer />
    </>
  );
}

export default App;
