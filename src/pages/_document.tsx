import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class PlatformDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Autograders" />
          <meta property="og:description" content="Autograders Platform" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
