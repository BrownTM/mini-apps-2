import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from './Components/Chart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      disclaimer: ''
    };
  };

  componentDidMount() {
    axios.get('/getBPI')
      .then((results) => {
        var dateArr = [];
        var bpiArr = [];
        for (var date in results.data.bpi) {
          dateArr.push(date);
          bpiArr.push(results.data.bpi[date]);
        };
        this.setState({
          data: {
            dates: dateArr,
            prices: bpiArr
          },
          disclaimer: results.data.disclaimer
        });
      });
  };

  render() {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>
        <Chart data={this.state.data}/>
        <div>{this.state.disclaimer}</div>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
