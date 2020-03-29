import React from 'react';
import Dsign, { Navbar, Avatar, NavbarSection, NavbarLink } from '..';
import { AppProps } from 'next/app';

export default ({ Component, pageProps }: AppProps) => (
  <Dsign>
    <Navbar>
      <NavbarSection>
        <img src="https://github.com/itshaydendev.png" width="32px" style={{ display: 'flex', marginRight: '1rem' }} />
        <NavbarLink href="#">Home</NavbarLink>
        <NavbarLink href="#">Home</NavbarLink>
        <NavbarLink href="#">Home</NavbarLink>
      </NavbarSection>
    </Navbar>
    <Component {...pageProps} />
  </Dsign>
)