import React, { useState, useEffect, useRef } from 'react';
import { getChartData }  from '../apiCalls'

function BarChart (props){
    const [calls, setCalls] = useState([]);
    const [requestFailed, setRequestFailed] = useState(false);

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
      
      const canvas = useRef();
    //   const ctx = canvas.getContext("2d")
    //  console.log(calls);
    //   console.log(ctx);
      if (requestFailed) return <p>Failed!</p>
    return (
        <canvas ref={canvas}>
            hello
        </canvas>
    )
}

export default BarChart