import React, { useEffect, useState, useRef } from "react";
import Chart from 'chart.js'
import '../ApplicationChart/CompanyChart.Module.css'





/* https://dev.to/vcanales/using-chart-js-in-a-function-component-with-react-hooks-246l */

const CompanyChart = ( { props } ) => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);


    /* chart.js documentation */
    const companyChart = {
        type: 'line',
        data: {
            datasets: [{
                data: props.data,
                label: "Signups",
                backgroundColor: 'rgba(50, 50, 217, 0.2)',
                borderColor: 'rgba(99, 99, 255, 1)',
                tension: 0.5,
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
            const newChartInstance = new Chart(chartContainer.current, companyChart);
            setChartInstance(newChartInstance);
        }
    }, [chartContainer]);

    /* react-chartjs-2 dependency didn't work */
    /* const chart = () => {
        setChartData({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                    label: 'My First dataset',
                    backgroundColor: '#f87979',
                    borderColor: '#f87979',
                    borderWidth: 4,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }]
            });
    }; */

    return (
        <>
            <canvas ref={chartContainer} />
        </>

    )

};


export default CompanyChart;