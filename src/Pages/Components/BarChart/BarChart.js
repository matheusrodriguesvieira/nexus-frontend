import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    // Legend
);

function BarChart({ chartData }) {

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]

    const valores = Object.values(chartData);

    const [userData, setUserData] = useState({
        labels: meses,
        datasets: [{
            label: 'Quantidade',
            data: valores,
            backgroundColor: ["#2980b9"]
        }],
    });

    const options = {
        responsive: true,
        plugins: {
            Tooltip: {
                enabled: true,
            },
            title: {
                display: true,
                text: 'Quantidade de ver e resolver por mês',
            },
        },
    };
    
    return (
        // <div>grafico</div>
        <Bar data={userData} options={options} />
    );
}

export default BarChart;