import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home/home'
import Navbar from './components/NavBar/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
