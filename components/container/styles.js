import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (max-width: 800px) {
    height: auto;
  }
`;
