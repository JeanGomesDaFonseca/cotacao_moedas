/* eslint-disable react/prop-types */
// src/components/CurrencyChart.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const CurrencyChart = ({ selectedCurrency }) => {
    const [chartOptions] = useState({
        chart: {
            type: 'line',
            zoom: {
                enabled: false,
            },
        },
        xaxis: {
            type: 'datetime',
        },
        annotations: {
            yaxis: [
                {
                    y: 30, // Customize the y-coordinate for your annotation
                    borderColor: '#ff0000',
                    label: {
                        borderColor: '#ff0000',
                        style: {
                            color: '#fff',
                            background: '#ff0000',
                        },
                        text: 'Annotation Text',
                    },
                },
            ],
        },
    });
    const [chartSeries, setChartSeries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://economia.awesomeapi.com.br/json/last/${selectedCurrency}`);
                const candlestickData = formatDataForCandlestick(response.data.USDBRL);
                setChartSeries([{ data: candlestickData }]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Atualizar os dados a cada 30 segundos
        const intervalId = setInterval(fetchData, 30000);

        // Limpar o intervalo ao desmontar o componente
        return () => clearInterval(intervalId);
    }, [selectedCurrency]);

    const formatDataForCandlestick = (data) => {
        return [{
            x: new Date(data.timestamp * 1000),
            y: [parseFloat(data.bid), parseFloat(data.ask), parseFloat(data.low), parseFloat(data.high)],
        }];
    };

    return (
        <div>
            {/* <ApexCharts options={chartOptions} series={chartSeries} type="candlestick" height={400} width={600} /> */}
            <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={400} width={600} />

        </div>
    );
};

export default CurrencyChart;
