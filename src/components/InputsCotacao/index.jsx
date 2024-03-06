import { useState } from 'react';
import { Container, CurrencyInput, Icon, Input, InputLabel } from './styles';
import { faDollarSign, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const InputsCotacao = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
    };

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    return (
        <Container>
            <InputLabel>
                <Icon icon={faDollarSign} />
                <CurrencyInput type="text" placeholder="Selecione a moeda" value={selectedCurrency} onChange={handleCurrencyChange}>
                    <option value="" disabled hidden>Selecione a moeda</option>
                    <option value="USD">Dólar</option>
                    <option value="EUR">Euro</option>
                    <option value="BTC">Bitcoin</option>
                </CurrencyInput>
            </InputLabel>
            <InputLabel>
                <Icon icon={faCalendarAlt} />
                <Input type="date" placeholder="Data Inicial" value={startDate} onChange={handleStartDateChange} />
            </InputLabel>
            <InputLabel>
                <Icon icon={faCalendarAlt} />
                <Input type="date" placeholder="Data Final" value={endDate} onChange={handleEndDateChange} />
            </InputLabel>
        </Container>
    );

};


export default InputsCotacao;
