import React from 'react';
import Link from 'next/link';
import Button from '../button';

import {
  StyledHeader,
} from './styles';

const Header = ({ showSignup }) => (
  <StyledHeader>
    <Link prefetch href="/">
      <img src="/static/assets/logo.svg" style={{ cursor: 'pointer' }}></img>
    </Link>
    {showSignup &&
      <Link prefetch href="/signup">
        <Button>Sign Up</Button>
      </Link>
    }

  </StyledHeader>
);

export default Header;
