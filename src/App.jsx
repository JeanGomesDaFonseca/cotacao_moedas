/* eslint-disable no-unused-vars */
import { useState } from 'react';
import CurrencyChart from './components/CurrencyChart/CurrencyChart';
import Sidebar from './components/Sidebar';
import InputsCotacao from './components/InputsCotacao';
import { Container, ContentContainer, CurrencyChartContainer } from '../style/Global';

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (

    <Container>
      <Sidebar />
      <ContentContainer>
        <InputsCotacao startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
        <CurrencyChartContainer>
          <CurrencyChart selectedCurrency={selectedCurrency} startDate={startDate} endDate={endDate} />
        </CurrencyChartContainer>
      </ContentContainer>
    </Container>
  );
};

export default App;
