import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/container';
import Header from '../components/header';
import Signup from '../components/signup';
import withAuth from '../utils/withAuth';

const SignupPage = () => (
  <Container>
    <Header showSignup={false} />
    <Signup />
  </Container>
);

SignupPage.propTypes = {
  username: PropTypes.string.isRequired,
};

export default SignupPage;
