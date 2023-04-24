import { Bar } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import { margin } from '@mui/system';
/**import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js';
Chart.register(
    LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)**/

const labels=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct '];
const labelss=[10000,20000,3000,35000,36000];

const options = {
    plugins:{
        legend:{
            position:'right',
            // textAlign : '',
            // padding : 20
        },
        title:{
            display:true,
            // position:'top',
            //padding:20,
           
            // text:"All Sales"
        }
    }
}
const data = {
    labels,
    labelss,
    datasets :[
        {
            label:'Sales',
            data:[13,15,12,22,13,10,21,13,15,10,11,12,28],
            backgroundColor:'pink'
        },
        {
            label:'Target',
            data:[20,21,19,23,16,25,25,20,16,11,14,20,28],
            backgroundColor:'grey'
        }
    ]
}

export default function BarChart(){
    return(
        <div className='col-10 offset-1 ' >
            <Bar className='bar' style={{'width':850,'height':400,'paddingBottom':30,'marginBottom':-20}} options={options} data={data}  />
        </div>
    )
}

