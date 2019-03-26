import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Hero from '../components/hero';
import withAuth from '../utils/withAuth';

const Index = () => (
  <Container>
    <Header showSignup={true} />
    <Hero />
  </Container>
);

export default withAuth(Index, { requiresAuth: false, shouldRedirect: true });
