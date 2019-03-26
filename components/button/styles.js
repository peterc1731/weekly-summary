import styled from 'styled-components';
import theme from '../../theme';

export const StyledButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid ${theme.colors.red};
  color: ${theme.colors.red};
  cursor: pointer;
  font-size: 16px;
  transition: color 0.2s ease-in-out, border 0.2s ease-in-out, background-color 0.2s ease-in-out;

  :hover {
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
  }

  ${props => props.disabled && (`
    color: ${theme.colors.grey} !important;
    border: 1px solid ${theme.colors.grey} !important;
  `)}
`;

export const StyledAltButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.black};
  color: ${theme.colors.black};
  cursor: pointer;
  font-size: 12px;
  transition: color 0.2s ease-in-out, border 0.2s ease-in-out, background-color 0.2s ease-in-out;
  
  margin-bottom: 20px;

  :hover {
    border: 1px solid ${theme.colors.blue};
    color: ${theme.colors.blue};
  }
`;
