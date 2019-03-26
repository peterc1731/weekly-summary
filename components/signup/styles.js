import styled from 'styled-components';
import theme from '../../theme';

export const StyledSignupContainer = styled.div`
  margin-top: 100px
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 800px) {
    img {
      display: none;
    }
  }
`;

export const StyledFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 100px;

  @media only screen and (max-width: 800px) {
    padding-left: 0;
    width: auto;
    margin: auto;
  }
`;

export const StyledInputContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledDropdownContainer = styled.div`
  margin-bottom: 20px;
`;
