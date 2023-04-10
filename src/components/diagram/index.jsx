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
import {useSelector} from "react-redux";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



export function Diagram () {
    const airTemperature = useSelector(state=> state.weather.currentDay?.Temperature.Maximum.Unit)

    const graphicData = useSelector(state => state.weather.graphicData)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text:`Air temperature ${airTemperature}`,
            },
        },
    };
    const data = {
        labels: graphicData?.hours,
        datasets: [
            {
                label: 'Forecast for 12 hours',
                data: graphicData?.temperatures,
                borderColor: '#fff',
                backgroundColor: '#35455e',
            }
        ],
    };
    return(
        <div className='diagram_grid content'>
            <Line options={options} data={data} />
        </div>
    )
}
