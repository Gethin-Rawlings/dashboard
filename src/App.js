import React from 'react';
import './App.css';
import HourlyCalls from './components/HourlyCallBarChart'; 
import CallsOpenedByQueue from './components/CallsOpenedByQueue';

function App()  {
      
    return (
    <div className='main' >
      <div className = 'Chart1'>
        <HourlyCalls />
      </div>
      <div className = 'Chart2'>
        <CallsOpenedByQueue />
      </div>
    </div>
   )
 }

export default App;
