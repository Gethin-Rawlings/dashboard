import React from 'react';
import './App.css';
import Chart2d from './components/Chart2d';
import Lists from './components/Lists';
// import Barchart from './components/BarChart';
import Chart from './components/Chart';
import Canvas from './components/Canvas';

function App()  {
    const url = 'http://localhost:5000'
    const openCallsUrl = '/customOpenCalls';
    const openCallstitle = 'Open Calls by Queue';
    const openedTodayUrl = '/customWidgetData';
    const openedtodatTitle = 'Calls opened by Hour';
    const callsByUsersWeeklyUrl = '/callsByUsersWeekly';
    const callsByUsersWeeklyTitle = 'Focus on this week';
    const column2d="Column2d";
    const bar2d="Bar2d";
    return (
    <div className='main' >
      <div className='openCallsQueue'>
        <Chart2d url={url+openCallsUrl} title={openCallstitle} type={bar2d}/>
      </div>
      <div className='callsOpenedByHour'>
        <Chart2d url={url+openedTodayUrl} title={openedtodatTitle} type={column2d}/>
      </div>
      <div className='callsByUsersWeekly'> 
        <Lists url={url+callsByUsersWeeklyUrl} title={callsByUsersWeeklyTitle}/>
      </div>
      {/* <div className='barchart'>
        <Barchart url={url+openCallsUrl} title={openCallstitle} />
      </div> */}
      <div>
      {/* <Chart url={url+openCallsUrl} title={openCallstitle} /> */}
      <Canvas />
      </div>
    </div>
   )
 }

export default App;
