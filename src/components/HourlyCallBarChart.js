import React, { useState, useEffect }  from 'react';

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import { getChartData }  from '../apiCalls'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function HourlyCalls () {

    const [calls, setCalls] = useState([]);
    const [requestFailed ,setRequestFailed] = useState(false);
    const chart = {
        chart: {
          caption: "Calls opened today",
          theme: "candy"
        }
    }
    useEffect( ()=> {
        getData();
        let interval = setInterval(getData, 60000);
        return function cleanup() {
            clearInterval(interval);
        }
    },[])

    async function getData()  {
        try {
          const url = 'http://localhost:5000/customWidgetData';
          const data = await getChartData(url)
          setCalls(data)
        } catch (error) {setRequestFailed(true)
        }
      }

      if (requestFailed) return <p>Failed!</p>
      let dataSource = {...chart, data : calls}
      if (calls) {
        return (
            <div>
                <ReactFC type="column2d" width="100%" dataFormat="JSON" dataSource={dataSource}/>
            </div>
            )
      } 
}
export default HourlyCalls;