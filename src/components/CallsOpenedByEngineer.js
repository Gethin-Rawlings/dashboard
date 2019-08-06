import React, { useState, useEffect } from 'react';
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import { getChartData }  from '../apiCalls'
import '../App.css';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function CallsOpenedByEngineer() {
    const [calls, setCalls] = useState([]);
    const [requestFailed, setRequestFailed] = useState(false);
  
    useEffect( () => {
        getData();
        let interval = setInterval(getData, 60000);
        return function cleanup() {
            clearInterval(interval);
          };
      },[]);
    
      async function getData() {
        try {
          const url = 'http://localhost:5000/geckoData';
          const data = await getChartData(url)
          setCalls(data)
        } catch (error) {
          setRequestFailed(true)
        }
      }
      
       const displayEngineers = (calls) => {
        
          let display = []
          let names = [];
          let numberCalls = [];
          for(let i=0;i<calls.length;i++) {
           names.push(<p>{calls[i].label}</p> )
           numberCalls.push(<p>{calls[i].value}</p>)
          } 
          display.push(<div className='Engineer'>{names}</div>)
          display.push(<div className='EnginnerCalls'>{numberCalls}</div>)
          return display;
      }

      if (requestFailed) return (<p>Network request failed</p>)
      
    return (
      displayEngineers(calls)
    )    
  }

  export default CallsOpenedByEngineer;