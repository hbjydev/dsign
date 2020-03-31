import React from 'react';
import Dsign, { Navbar, NavbarSection, NavbarLink } from '..';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';

export default withRouter(({ Component, pageProps, router }: AppProps) => (
  <Dsign>
    <Head>
      <title>Dsign</title>
      <link rel="shortcut icon" href="/logo.svg" type="image/svg" />
      <meta name="description" content="Dsign is a component library built by @itshaydendev to be modern, easy-to-use and highly extensible." />
    </Head>
    <Navbar>
      <NavbarSection>
        <a href="/">
          <img src="/logo.svg" width="24px" style={{ display: 'flex', marginRight: '1rem' }} />
        </a>
        <NavbarLink to="/docs" active={router.pathname.startsWith('/docs')}>Docs</NavbarLink>
        <NavbarLink to="https://github.com/itshaydendev/dsign">GitHub</NavbarLink>
      </NavbarSection>
    </Navbar>
    <main>
      <Component {...pageProps} />
    </main>
  </Dsign>
));
