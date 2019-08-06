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
          calls.map(p => console.log(p))
        } catch (error) {
          setRequestFailed(true)
        }
      }
         if (requestFailed) return (<p>Network request failed</p>)
      
    return (
        <div className='list'>
            <section className='opened'>Calls opened today</section>
            <ul className='labels' title="Engineer" >
                {calls.map(p=>(<li>{p.label}</li>))}
            </ul>
            <ul className='values' title="Calls">
                {calls.map(p=>(<li>{p.value}</li>))}
            </ul>
        </div>
    )
  }

  export default CallsOpenedByEngineer;