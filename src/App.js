import React from 'react';
import './App.css';
import NavComponent from './Components/NavComponent/Nav';
import WelcomeComponent from './Components/WelcomeComponent/Welcome';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">
      <NavComponent className='component'/>
      <WelcomeComponent />
    </BrowserRouter>
  );
}

export default App;
