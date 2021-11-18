import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js";
import '../SiteTrafficChart/SiteTrafficChart.Module.css';


const SiteTrafficChart = ({ props }) => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);


    const siteTrafficChart = {
        type: 'line',
        data: {
            datasets: [{
                data: props.data,
                label: "Signups",
                backgroundColor: 'rgba(255, 199, 200, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.3,
                fill: true
            }],
            labels: props.labels,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 77,
            title: {
                display: true,
                text: props.label,
            },
            centerText: {
                display: true,
                text: '250',
            },
            legend: {
                display: true,
            }
        }
    };


    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chart(chartContainer.current, siteTrafficChart);
            setChartInstance(newChartInstance);
        }
    }, [chartContainer]);


    return (
        <>
            <canvas id="myChart" ref={chartContainer}/>
        </>
    )

};


export default SiteTrafficChart;