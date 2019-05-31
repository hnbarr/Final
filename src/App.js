import React from 'react';
import './App.css';
import NavComponent from './Components/NavComponent/nav';
import LeftComponent from './Components/LeftComponent/left';
import CenterComponent from './Components/CenterComponent/center';
import RightComponent from './Components/RightComponent/right';

function App() {
  return (
    <div className="App">
      <NavComponent className='component'/>
      <div className='components'>
        <LeftComponent className='component'/>
        <CenterComponent className='component'/>
        <RightComponent className='component'/>
      </div>
    </div>
  );
}

export default App;
