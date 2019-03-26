import styled from 'styled-components';
import theme from '../../theme';

export const StyledSummaryContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 800px) {
    height: auto;
    flex-wrap: nowrap;
  }
`;

export const StyledCard = styled.div`
  width: 370px;
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid rgba(111,119,121,0.2);
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const StyledCardTitle = styled.h3`
  font-weight: 300;
  font-size: 18px;
  margin-top: 0;
`;

export const StyledTable = styled.table`
  td {
    padding: 3px 15px;
  }
`;

export const StyledPasswordModal = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 20%;
  left: calc(50vw - 150px);
  border: 1px solid ${theme.colors.grey};
  background-color: ${theme.colors.white};
  z-index: 1000;
  border-radius: 5px;
`;

export const StyledScrim = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${theme.colors.grey};
  opacity: 80%;
  z-index: 999;
`;
