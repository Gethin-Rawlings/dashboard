import React from 'react';
import './App.css';
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import { getChartData }  from './apiCalls'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        callsOpened: [],
        requestFailed: false,
        dataSource : {
          chart: {
            caption: "Calls opened today",
            theme: "candy",
            xAxisName: 2
          }
        }
      }
    }
    
  async  componentWillMount() {
    this.getData();
    this.interval = setInterval(this.getData, 60000);
  };

  getData = async () => {
    try {
      const url = 'http://localhost:5000/customWidgetData';
      const data = await getChartData(url)
      this.setState({callsOpened: data})
    } catch (error) {
      this.setState({ requestFailed: true })
    }
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.requestFailed) return <p>Failed!</p>
    let dataSource = this.state.dataSource
    let callsOpened = this.state.callsOpened
    let newDataSource = {...dataSource, data : callsOpened}
    console.log(newDataSource)
    return (
      <div className='main' >
        <div className = 'Chart1'>
          <ReactFC type="column3d" width="100%" dataFormat="JSON" dataSource={newDataSource}/>
        </div>
        <div className = 'Chart2'>
          <ReactFC type="bar3d" width="100%" dataFormat="JSON" dataSource={newDataSource}/>
        </div>

        
      </div>
    );
  }
}

export default App;
