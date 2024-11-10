// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Partners from './components/Partners';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Partners />
    </div>
  );
}

export default App;
