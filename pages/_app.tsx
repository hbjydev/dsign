import React from 'react';
import Dsign, { Navbar, NavbarSection, NavbarLink } from '..';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { withRouter } from 'next/router';

export default withRouter(({ Component, pageProps, router }: AppProps) => (
  <Dsign>
    <Head>
      <title>Dsign</title>
      <meta name="description" content="Dsign is a component library built by @itshaydendev to be modern, easy-to-use and highly extensible." />
    </Head>
    <Navbar>
      <NavbarSection>
        <a href="/">
          <img src="/logo.svg" width="32px" style={{ display: 'flex', marginRight: '1rem' }} />
        </a>
        <NavbarLink to="/docs" active={router.pathname.startsWith('/docs')}>Docs</NavbarLink>
        <NavbarLink to="https://github.com/itshaydendev/dsign">GitHub</NavbarLink>
      </NavbarSection>
    </Navbar>
    <Component {...pageProps} />
  </Dsign>
));
