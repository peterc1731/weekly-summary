import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

const Input = ({
  placeholder, value, onChange, type, onKeyUp,
}) => (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      onKeyUp={onKeyUp}
    />
  );

Input.defaultProps = {
  style: {},
  error: false,
  onClick: () => { },
  type: 'text',
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
