import React from 'react';
import './App.css';
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const dataSource = {
  chart: {
    caption: "Calls opened today",
   // subcaption: "In MMbbl = One Million barrels",
    // xaxisname: "Country",
    // yaxisname: "Reserves (MMbbl)",
    // numbersuffix: "K",
    theme: "candy"
  },
  data: [
    {
      label: "07",
      value: "10"
    },
    {
      label: "08",
      value: "30"
    },
    {
      label: "09",
      value: "50"
    },
    {
      label: "10",
      value: "10"
    },
    {
      label: "11",
      value: "15"
    },
    {
      label: "12",
      value: "24"
    },
    {
      label: "13",
      value: "30"
    },
    {
      label: "14",
      value: "30"
    }
  ]
};

class App extends React.Component {
  render() {
    return (
      <ReactFC
        type="column2d"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default App;
