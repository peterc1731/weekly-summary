import styled from 'styled-components';
import theme from '../../theme';

export const StyledContainer = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 40px;
`;

export const StyledText = styled.span`
  font-size: 12px;
  color: ${theme.colors.grey};
`;

export const StyledBarContainer = styled.div`
  width: 200px;
  height: 5px;
  border: 1px solid ${theme.colors.grey};
  border-radius: 4px;
`;

export const StyledBar = styled.div`
  width: ${props => `${props.step * 50 - 2}px`};
  transition: width 0.4s ease-in-out;
  height: 3px;
  background-color: ${theme.colors.red};
  border-radius: 3px;
`;
