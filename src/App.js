import React from 'react';
import './App.css';
import Chart2d from './components/Chart2d';
import Lists from './components/Lists';

function App()  {
    const openCallsUrl = 'http://localhost:5000/customOpenCalls';
    const openCallstitle = 'Open Calls by Queue';
    const openedTodayUrl = 'http://localhost:5000/customWidgetData';
    const openedtodatTitle = 'Calls opened by Hour';
    const callsByUsersWeeklyUrl = 'http://localhost:5000/callsByUsersWeekly';
    const callsByUsersWeeklyTitle = 'Focus on this week';
    const column2d="Column2d";
    const bar2d="Bar2d";
    return (
    <div className='main' >
      <div className='openCallsQueue'>
        <Chart2d url={openCallsUrl} title={openCallstitle} type={bar2d}/>
      </div>
      <div className='callsOpenedByHour'>
        <Chart2d url={openedTodayUrl} title={openedtodatTitle} type={column2d}/>
      </div>
      <div className='callsByUsersWeekly'> 
        <Lists url={callsByUsersWeeklyUrl} title={callsByUsersWeeklyTitle}/>
      </div>
    </div>
   )
 }

export default App;
