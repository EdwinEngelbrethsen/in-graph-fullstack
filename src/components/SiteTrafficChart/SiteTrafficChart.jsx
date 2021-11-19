import React, { createRef, Component } from "react";
import Chart from "chart.js";
import '../SiteTrafficChart/SiteTrafficChart.Module.css';


class SiteTrafficChart extends Component {
    chartRef = createRef();
    
    componentDidMount() {
        const ctx = this.chartRef.current.getContext("2d");
    
        const { data, labels, label } = this.props;

        var gradientBg = ctx.createLinearGradient(0, 0, 0, 450);
        gradientBg.addColorStop(0.5, 'rgba(153, 49, 232)');
        gradientBg.addColorStop(1, 'rgba(255, 255, 255, 0.5)');
    
        new Chart(ctx, {
        type: "line",
        data: {
            labels,
            datasets: [
            {
                data: data,
                label: "Users",
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

export default SiteTrafficChart;


/* const SiteTrafficChart = ({ props }) => {
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


export default SiteTrafficChart; */