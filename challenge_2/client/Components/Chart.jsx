import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = (props) => {
  var data = {
    labels: props.data.dates,
    datasets: [{
      label: 'Closing Price (BPI)',
      data: props.data.prices
    }]
  };

  return (
    <div>
      <Line data={data}/>
    </div>
  );
}

export default Chart;
