import React , {useContext , useState , useEffect} from 'react'
import {
  Chart as ChartJS ,
  CategoryScale,
  LinearScale,
  BarElement , 
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { infoContext } from '../../../contexts/AppContext'
import classes from './ChartSection.module.scss'

ChartJS.register(
  
  CategoryScale,
  LinearScale,
  BarElement , 
  ArcElement,
  Title,
  Tooltip,
  Legend
)

export const ChartSection = () => {
  const context = useContext(infoContext)
  const [chartData, setChartData] = useState({
    labels : [],
    datasets:[]
  })
  const [chartOption, setChartOption] = useState()
   useEffect(() => {
     var pChart = []
     for(var i = 0 ; i < 11 ; i++){
         pChart.push(
           { 
             InstrumentID : context.pieChart.InstrumentID[i],
             name : context.pieChart.name[i],
             value : context.pieChart.value[i],
             percent : context.pieChart.percent[i],
             id : i
            }
            )
          }
          console.log(pChart);
          setChartData({
            labels : pChart.map(item => item.name),
            datasets : [{
              label:"نمودار",
              data : pChart.map(item => (item.percent*100).toFixed(0)),
              backgroundColor : [
                'rgba(255 , 97 , 80, 0.7)',
                'rgba(19 , 78 , 211, 0.7)',
                'rgba(93 , 12 , 70, 0.6)',
                'rgba(22 , 222 , 122, 0.5)',
                'rgba(255 , 168 , 34, 0.7)',
                'rgba(204 , 29 , 200, 0.7)',
                'rgba(218 , 216 , 115, 0.7)',
                'rgba(37 , 94 , 0, 0.7)',
                'rgba(0 , 200 , 48, 0.7)',
                'rgba(0 , 50 , 200, 0.7)',
                'rgba(100 , 200 , 0, 0.7)',
              ],
              borderWidth : 2,
            }]
          });
          console.log(chartData);
          return () => {
     };
   }, [])
  return (
    <div className={classes.container} >
      <h3>
        توزیع وزن سرمایه گذاری
        (درصد)
        </h3>
    {
      !context.loading ?
      <Doughnut  
        data={chartData}
        options={
          {
            animation:{
              animateScale:true
            },
            radius:"80%",
            responsive: true ,
            maintainAspectRatio : true,
            plugins : {
              title : {
                align : "end",

              },
              tooltip : {
                intersect : true
              },
              
            }
            
          }
        }
      />
      :
      <h1>wait</h1>
    }
    </div>
    
  )
}
