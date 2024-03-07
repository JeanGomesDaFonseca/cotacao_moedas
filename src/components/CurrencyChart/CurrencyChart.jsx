/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const CurrencyChart = () => {

    const [data, setData] = useState([]);
    const [coin, setCoin] = useState('BTC');
    const [dateRange, setDateRange] = useState({ start: '20180901', end: '20180930' });
    let interval;

    async function GetCotacoes() {
        try {
            const response = await axios.get(`https://economia.awesomeapi.com.br/last/${coin}-BRL`);
            const { low, high } = response.data[`${coin}BRL`];
            setData(oldData => [...oldData, { x: new Date(), y: [low, high, low, high] }]);
        } catch (error) {
            console.error('Erro ao obter cotações:', error);
        }
    }

    async function GetCotacoesDaily() {
        try {
            const response = await axios.get(`https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=${dateRange.start}&end_date=${dateRange.end}`);
            const data = response.data;

            setData(data.map(item => ({ x: new Date(item.timestamp * 1000), y: [item.low, item.high, item.low, item.high] })));
        } catch (error) {
            console.error('Erro ao obter cotações diárias:', error);
        }
    }

    useEffect(() => {
        GetCotacoes();
        interval = setInterval(() => { GetCotacoes(); }, 5000);
        return () => clearInterval(interval);
    }, [coin]);


    const chartOptions = {
        chart: {
            type: 'line',
            zoom: {
                enabled: true,
            },
        },
        xaxis: {
            type: 'datetime',
        },
    }

    return (
        <>
            <h1>Cotacoes</h1>

            <select onChange={(e) => {
                setCoin(e.target.value)
                setData([])
            }}>
                <option value="BTC">Bitcoin</option>
                <option value="USD">Dolar</option>
                <option value="EUR">Euro</option>
            </select>

            <button onClick={() => {
                clearInterval(interval);
                GetCotacoesDaily();
            }}>Get Daily Quotes</button>
            <ReactApexChart options={chartOptions} series={data} type="line" height={400} width={600} />
        </>
    );
};

export default CurrencyChart;
