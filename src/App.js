import React from 'react';
import './App.css';
import NavComponent from './Components/NavComponent/Nav';
import WelcomeComponent from './Components/WelcomeComponent';
import { BrowserRouter, Route } from 'react-router-dom'
import Articles from './Components/Article';
import Router from '../src/Router'

function App() {
  return (
    <BrowserRouter className="App">
      <NavComponent className='component'/>
        <Router />
    </BrowserRouter>
  );
}

export default App;
