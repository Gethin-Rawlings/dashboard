import React, { useState, useEffect }  from 'react';

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import { getChartData }  from '../apiCalls'


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function Chart2d (props) {

    const [calls, setCalls] = useState([]);
    const [requestFailed ,setRequestFailed] = useState(false);
    const chart = {
        chart: {
          caption: props.title,
          theme: "candy",
          drawcrossline: "1"
        }
    }
    useEffect( ()=> {
      const getData = async() =>  {
        try {
          const data = await getChartData(props.url)
          setCalls(data)
        } catch (error) {setRequestFailed(true)
        }
      }
        getData();
        let interval = setInterval(getData, 60000);
        return function cleanup() {
            clearInterval(interval);
        }
    },[props.url])

      if (requestFailed) return <p>Failed!</p>
      let dataSource = {...chart, data : calls}
      if (calls) {
        return (
            <div>
                <ReactFC type={props.type} width="100%" dataFormat="JSON" dataSource={dataSource}/>
            </div>
            )
      } 
}
export default Chart2d;