/* eslint-disable no-unused-vars */
import { useState } from 'react';
import CurrencyChart from './components/CurrencyChart/CurrencyChart';
import Sidebar from './components/Sidebar';
import InputsCotacao from './components/InputsCotacao';
import { Container, ContentContainer, CurrencyChartContainer } from '../style/Global';

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const startDate = null
  const endDate = null

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    // <>
    //     <Sidebar />
    //   <div style={{ display: 'flex', flexDirection: 'column' }}>
    //     <div>
    //       <InputsCotacao />
    //     </div>
    //     <div style={{ display: 'flex' }}>
    //       <CurrencyChart selectedCurrency={selectedCurrency} startDate={startDate} endDate={endDate} />
    //     </div>
    //   </div>

    // </>


    <Container>
      <Sidebar />
      <ContentContainer>
      <InputsCotacao />
        <CurrencyChartContainer>
          <CurrencyChart />
        </CurrencyChartContainer>
      </ContentContainer>
    </Container>
  );
};

export default App;
