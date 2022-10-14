import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Statistics = ({ dataBets }) => {

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: `Statistics 2022`,
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', '13/10/2022'];

const loser = [];
dataBets.map((item, index) => {
    
    loser[index] = item.date;
})

const utility = [];
dataBets.map((item, index) => {
    console.log(item.valueBet);
    utility[index] = item.winBet - item.valueBet ;
})


console.log(loser);
console.log(labels);
const data = {
    labels,
  datasets: [
    {
      label: 'Winner',
      data: utility,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      
    },
  ],
};


  return <Line options={options} data={data} />;
}

export default Statistics;