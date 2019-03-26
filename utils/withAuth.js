import React from 'react';
import Router from 'next/router';

export default (WrappedComponent, { requiresAuth, shouldRedirect }) => {
  const Page = props => (
    <WrappedComponent {...props} />
  );

  Page.getInitialProps = async (ctx) => {
    const { req, res } = ctx;

    if (req) {
      const { token } = req;

      if (requiresAuth && shouldRedirect && !token) {
        res.redirect('/login');
        return {};
      }

      if (!requiresAuth && shouldRedirect && token) {
        res.redirect('/home');
        return {};
      }
      ctx.token = token;
      const props = await (WrappedComponent.getInitialProps || (() => ({})))(ctx);
      return props;
    }

    const cookies = decodeURIComponent(document.cookie);
    const cookie = cookies.split(';')
      .filter(c => c.includes('=') && c.split('=')[0] === 'write-md-token');
    const token = cookie.length ? cookie[0].split('=')[1] : null;

    if (requiresAuth && shouldRedirect && !token) {
      Router.push('/login');
      return {};
    }

    if (!requiresAuth && shouldRedirect && token) {
      Router.push('/home');
      return {};
    }
    ctx.token = token;
    const props = await (WrappedComponent.getInitialProps || (() => ({})))(ctx);
    return props;
  };

  return Page;
};
