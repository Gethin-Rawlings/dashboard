import React, { useState, useEffect, useRef }  from 'react';
import '../App.css';
import { getChartData }  from '../apiCalls';
import { Chart } from "frappe-charts/dist/frappe-charts.min.esm";

function Charts (props) {
    const [calls, setCalls] = useState([]);
    const [requestFailed ,setRequestFailed] = useState(false);
    const [chart, setChart] = useState([]);
    // const [chartFailed, setChartFailed] = useState(false);
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

      const barChart = (data) => {
        if ( typeof chartRef.current !== "undefined") {    
          // console.log(data)
          // let chartDef = 
        //   new Chart( chartRef ,{
        //   parent: chartRef,
        //   title: 'Test',
        //   data: data,
        //   type:'bar'
        // });
        // setChart(chartDef)
        console.log('I ran');
        }      
      }

        if (requestFailed) return <p>Failed!</p>
        // if (chartFailed) return <p>Chart failed</p>
        if (!calls) return <p>Loading...</p>
        if (calls) {
          barChart(calls)
            return (
                <div ref={chartRef} id='chart'>{chart}
                  
                </div>
                )
          } 
}

export default Charts;