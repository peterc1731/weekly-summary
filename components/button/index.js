import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledButton, StyledAltButton,
} from './styles';

const Button = ({
  children, onClick, disabled, alt
}) => !alt ? (
  <StyledButton onClick={onClick} disabled={disabled}>
    {React.Children.toArray(children)}
  </StyledButton>
) : (
      <StyledAltButton onClick={onClick} disabled={disabled}>
        {React.Children.toArray(children)}
      </StyledAltButton>
    );

Button.defaultProps = {
  disabled: false,
  onClick: () => { },
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
