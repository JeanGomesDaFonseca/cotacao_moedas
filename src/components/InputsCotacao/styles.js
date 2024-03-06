import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Container = styled.div`
  display: flex;
  gap: 24px;
  margin: 0 auto;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CurrencyInput = styled.select`
  padding: 8px;
  margin-left: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-left: 8px;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;