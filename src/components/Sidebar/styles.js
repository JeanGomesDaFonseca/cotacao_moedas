// SidebarStyles.js
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  height: 900px;
  background-color: rgba(191, 191, 191, 0.5);
  color: #313131;
  padding: 20px;

`;

export const LogoContainer = styled.div`
  text-align: start;
  margin: 50px 0px;

  img {
    width: 120px;
    height: auto;
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  padding-bottom: 30px;
  font-size: 16px;
  font-weight: ${({isFontWeight}) => (isFontWeight ? isFontWeight : '')};
  color: ${({ isColor }) => (isColor ? isColor : '#313131')};
    

  svg {
    margin-right: 10px;
  }
`;
