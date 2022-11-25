import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
