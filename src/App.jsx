// src/App.js
import { useState } from 'react';
import CurrencyChart from './components/CurrencyChart';

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div>
      <label>
        Selecione a moeda:
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
          <option value="USD">Dólar</option>
          <option value="EUR">Euro</option>
          <option value="BTC">Bitcoin</option>
        </select>
      </label>

      <CurrencyChart selectedCurrency={selectedCurrency} startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default App;
