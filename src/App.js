import React from 'react';
import './App.css';
import NavComponent from './Components/NavComponent/Nav';
import WelcomeComponent from './Components/WelcomeComponent/Welcome';
// import LeftComponent from './Components/LeftComponent/Left';
// import CenterComponent from './Components/CenterComponent/Center';
// import RightComponent from './Components/RightComponent/Right';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'


function App() {
  return (
    <BrowserRouter className="App">
      <NavComponent className='component'/>
      <WelcomeComponent />
      <div className='components'>
        {/* <LeftComponent className='component'/> */}
        {/* <CenterComponent className='component'/> */}
        {/* <RightComponent className='component'/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
