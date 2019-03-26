import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  @media only screen and (max-width: 800px) {
    flex-direction: column;

    a {
      margin-top: 20px;
    }

    img {
      width: 80%;
    }
  }
`;
