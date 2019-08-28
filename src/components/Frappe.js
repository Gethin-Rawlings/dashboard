import React, { useState, useEffect, useRef }  from 'react';
import '../App.css';
import { getChartData }  from '../apiCalls';
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm"

function Frappe (props) {
    const [calls, setCalls] = useState([]);
    const [requestFailed ,setRequestFailed] = useState(false);
    const [chart, setChart] = useState([]);
    const [chartFailed, setChartFailed] = useState(false);
    let chartRef = useRef();

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

    useEffect( (data) => {
        try {
            console.log(chartRef);
            console.log(data);
            
            
        } catch (error) {setChartFailed(true); console.log(error)}
    },[chartRef])
        
      

        if (requestFailed) return <p>Failed!</p>
        if (chartFailed) return <p>Chart failed</p>
        if (!calls) return <p>Loading...</p>
        if (calls) {
            return (
                <div ref={chartRef} id='chart'>
                  {chart}
                </div>
                )
          } 
          
}

export default Frappe;