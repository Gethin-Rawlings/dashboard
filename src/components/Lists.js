import React, { useState, useEffect }  from 'react';
import { getChartData }  from '../apiCalls'

function Lists (props) {

    const [calls, setCalls] = useState([]);
    const [requestFailed ,setRequestFailed] = useState(false);
    
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

    const table = (calls) => {
        let table = [];
        for (let i=0;i<calls.length;i++){
            let children = [];
            let row = Object.values(calls[i]);
            console.log(row[0])
            row.map(data => children.push(<td id={i} key={data}>{data}</td>))
            table.push(<tr key={row}>{children}</tr>)
        }
        return table
    }

      if (requestFailed) return <p>Failed!</p>
      
      if (calls) {
        return (
            <section>
                <h4>
                    {props.title}
                </h4>
                <table>
                    <tbody>
                        {table(calls)}
                    </tbody> 
                </table>
            </section>
            )
      } 
}
export default Lists;