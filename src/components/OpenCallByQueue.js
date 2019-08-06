import React, { useState, useEffect } from 'react';
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import { getChartData }  from '../apiCalls'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function OpenCallByQueue() {
    const [calls, setCalls] = useState([]);
    const [requestFailed, setRequestFailed] = useState(false);
    const chart = {
        chart: {
          caption: "Open Calls by Queue",
          theme: "candy",
          drawcrossline: "1"
        }
      }
  
    useEffect( () => {
        getData();
        let interval = setInterval(getData, 60000);
        return function cleanup() {
            clearInterval(interval);
          };
      },[]);
    
      async function getData() {
        try {
          const url = 'http://localhost:5000/customOpenCalls';
          const data = await getChartData(url)
          setCalls(data)
        } catch (error) {
          setRequestFailed(true)
        }
      }

      if (requestFailed) return (<p>Network request failed</p>)
      let dataSource = {...chart, data:calls}
    return (
      <div>
        <ReactFC type="bar2d" width="100%" dataFormat="JSON" dataSource={dataSource}/>
      </div>
    );
  }

  export default OpenCallByQueue;