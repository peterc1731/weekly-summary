import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Head from 'next/head';

import GlobalStyles from '../globalStyles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(
        <React.Fragment>
          <Head>
            <title>Weekly Summary</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <GlobalStyles />
          <App {...props} />
        </React.Fragment>,
      ),
    });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
    };
  }
}
