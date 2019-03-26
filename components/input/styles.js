import styled from 'styled-components';
import theme from '../../theme';

export const StyledInput = styled.input`
  padding: 8px;
  font-size: 12px;
  border: 1px solid ${theme.colors.black};
  border-radius: 5px;
  outline: none;
  width: 250px;
  margin-bottom: 20px;
  box-sizing: border-box;

  :focus {
    border: 1px solid ${theme.colors.blue};
  }
`;
