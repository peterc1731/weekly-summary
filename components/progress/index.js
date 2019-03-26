import React from 'react';
import PropTypes from 'prop-types';
import { StyledText, StyledBarContainer, StyledBar, StyledContainer } from './styles';

const Input = ({
  step,
}) => (step < 5) && (
  <StyledContainer>
    <StyledText>{step} of 4</StyledText>
    <StyledBarContainer>
      <StyledBar step={step} />
    </StyledBarContainer>
  </StyledContainer>
);

Input.propTypes = {
  step: PropTypes.number,
};

export default Input;
