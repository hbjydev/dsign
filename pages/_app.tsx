import React from 'react';
import Dsign, { Navbar, NavbarSection, NavbarLink } from '..';
import { AppProps } from 'next/app';

export default ({ Component, pageProps }: AppProps) => (
  <Dsign>
    <Navbar>
      <NavbarSection>
        <a href="/">
          <img src="/logo.svg" width="32px" style={{ display: 'flex', marginRight: '1rem' }} />
        </a>
        <NavbarLink to="/docs">Docs</NavbarLink>
        <NavbarLink to="https://github.com/itshaydendev/dsign">GitHub</NavbarLink>
      </NavbarSection>
    </Navbar>
    <Component {...pageProps} />
  </Dsign>
)
