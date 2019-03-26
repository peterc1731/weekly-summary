import React from 'react';
import Link from 'next/link';
import Button from '../button';

import {
  StyledHeader, StyledSubtitle, StyledTitle,
} from './styles';

const SummaryHeader = () => (
  <StyledHeader>
    <StyledTitle>Your Weekly Summary</StyledTitle>
    <StyledSubtitle>Sunday 10th March</StyledSubtitle>
  </StyledHeader>
);

export default SummaryHeader;
