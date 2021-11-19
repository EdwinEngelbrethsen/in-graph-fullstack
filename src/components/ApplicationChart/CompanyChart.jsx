import React, { Component, createRef } from "react";
import Chart from 'chart.js'
import '../ApplicationChart/CompanyChart.Module.css'

class CompanyChart extends Component {
    chartRef = createRef();

    componentDidMount() {
        const ctx = this.chartRef.current.getContext("2d");

        const { data, labels, label } = this.props;

        var gradientBg = ctx.createLinearGradient(0, 0, 0, 450);
        gradientBg.addColorStop(0.5, 'rgba(73, 75, 235)');
        gradientBg.addColorStop(1, 'rgba(255, 255, 255, 0.5)');

        new Chart(ctx, {
        type: "line",
        data: {
            labels,
            datasets: [
            {
                data: data,
                label: "Signups",
                backgroundColor: gradientBg,
                borderColor: "transparent",
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutoutPercentage: 77,
            title: {
                display: true,
                text: label
            },
            centerText: {
                display: true,
                text: '250',
            },
            legend: {
                display: true,
            }
        },
        });
    }

    render() {
        return <canvas ref={this.chartRef} />;
    }
}

export default CompanyChart;



/* https://dev.to/vcanales/using-chart-js-in-a-function-component-with-react-hooks-246l */
/* 
const CompanyChart = ( { props } ) => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);


    /* chart.js documentation */
   /*  const companyChart = {
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

    return (
        <>
            <canvas ref={chartContainer} />
        </>

    )

};


export default CompanyChart; */ 