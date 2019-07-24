import React from 'react';
import './App.css';
import Chart2d from './components/Chart2d';

function App()  {
    const openCallsUrl = 'http://localhost:5000/customOpenCalls';
    const openCallstitle = 'Open Calls by Queue';
    const openedTodayUrl = 'http://localhost:5000/customWidgetData';
    const openedtodatTitle = 'Calls opened by Hour';
    const column2d="Column2d";
    const bar2d="Bar2d";
    return (
    <div className='main' >
      <div className = 'Chart1'>
        <Chart2d url = {openCallsUrl} title = {openCallstitle} type={bar2d}/>
      </div>
      <div className = 'Chart2'>
        <Chart2d url= {openedTodayUrl} title={openedtodatTitle} type={column2d}/>
      </div>
    </div>
   )
 }

export default App;
