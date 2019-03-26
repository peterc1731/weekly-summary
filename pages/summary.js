import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/container';
import SummaryHeader from '../components/summary-header';
import Summary from '../components/summary';
import withAuth from '../utils/withAuth';

const SignupPage = ({ username }) => (
  <Container>
    <SummaryHeader />
    <Summary />
    {/* <Login /> */}
  </Container>
);

SignupPage.propTypes = {
  username: PropTypes.string.isRequired,
};

SignupPage.getInitialProps = ({ query }) => ({ username: query.username });

export default withAuth(SignupPage, { requiresAuth: false, shouldRedirect: true });
