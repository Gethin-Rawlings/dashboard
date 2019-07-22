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
            theme: "candy"
          }
        }
      }
    }
    
  async  componentWillMount() {
    try {
      const url = 'http://localhost:5000/customWidgetData';
      const data = await getChartData(url)
      this.setState({callsOpened: data})
      console.log(JSON.stringify(`whats going on ${this.state.callsOpened}`))
    } catch (error) {
      this.setState({ requestFailed: true })
    }
  };

  render() {
    if (this.state.requestFailed) return <p>Failed!</p>
    let dataSource = this.state.dataSource
    let callsOpened = this.state.callsOpened
    let newDataSource = {...dataSource, data : callsOpened}
    console.log(`calls opened  ${JSON.stringify(callsOpened)}`);

    return (
      <div className = 'Chart 1'>
        <ReactFC
        type="column2d"
        dataFormat="JSON"
        dataSource={newDataSource}
      />
      </div>
      
    );
  }
}

export default App;
