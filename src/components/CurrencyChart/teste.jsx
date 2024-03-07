/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function App() {
    const [data, setData] = useState([]);
    const [coin, setCoin] = useState('BTC');
    const [dateRange, setDateRange] = useState({ start: '20180901', end: '20180930' });
    let interval;

    async function GetCotacoes() {
        const response = await fetch(`https:economia.awesomeapi.com.br/last/${coin}-BRL`);
        const json = await response.json();
        const low = json[${ 'coin' }BRL].low;
        const high = json[${ 'coin' }BRL].high;
        setData(oldData => [...oldData, { x: new Date(), y: [low, high, low, high] }]);
    }

    async function GetCotacoesDaily() {
        const response = await fetch(`https:economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=${dateRange.start}&end_date=${dateRange.end}`);
    const json = await response.json();
        setData(json.map(item => ({ x: new Date(item.timestamp * 1000), y: [item.low, item.high, item.low, item.high] })));
    }

    useEffect(() => {
        GetCotacoes();
        interval = setInterval(() => { GetCotacoes(); }, 5000);
        return () => clearInterval(interval);
    }, [coin]);

    const options = {
        chart: {
            type: 'candlestick',
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };

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

            <Chart options={options} series={[{ data }]} type="candlestick" />
        </>
    );
}

export default App;


    // const [chartOptions] = useState({
    //     chart: {
    //         type: 'line',
    //         zoom: {
    //             enabled: false,
    //         },
    //     },
    //     xaxis: {
    //         type: 'datetime',
    //     },
    //     annotations: {
    //         yaxis: [
    //             {
    //                 y: 30, // Customize the y-coordinate for your annotation
    //                 borderColor: '#ff0000',
    //                 label: {
    //                     borderColor: '#ff0000',
    //                     style: {
    //                         color: '#fff',
    //                         background: '#ff0000',
    //                     },
    //                     text: 'Annotation Text',
    //                 },
    //             },
    //         ],
    //     },
    // });
    // const [chartSeries, setChartSeries] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`https://economia.awesomeapi.com.br/json/last/${selectedCurrency}`);
    //             const candlestickData = formatDataForCandlestick(response.data.USDBRL);
    //             setChartSeries([{ data: candlestickData }]);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();

    //     // Atualizar os dados a cada 30 segundos
    //     const intervalId = setInterval(fetchData, 30000);

    //     // Limpar o intervalo ao desmontar o componente
    //     return () => clearInterval(intervalId);
    // }, [selectedCurrency]);

    // const formatDataForCandlestick = (data) => {
    //     return [{
    //         x: new Date(data.timestamp * 1000),
    //         y: [parseFloat(data.bid), parseFloat(data.ask), parseFloat(data.low), parseFloat(data.high)],
    //     }];
    // };