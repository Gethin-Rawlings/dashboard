import React from 'react';
import './App.css';
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import HourlyCallsOpened from './components/HourlyCallsOpened';
import OpenCallByQueue from './components/OpenCallByQueue';
// import CallsOpenedByEngineer from './components/CallsOpenedByEngineer'; 
import CallsOpenedByEngineer from './components/CallsOpenByEnginnerList';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class App extends React.Component {

  render() {
    return (
      <div className='main' >
         <CallsOpenedByEngineer />
        <div className = 'Chart1'>
          <OpenCallByQueue />
        </div >
        <div className = 'Chart2'>
          <HourlyCallsOpened />
        </div>
       </div>
    );
  }
}

export default App;
