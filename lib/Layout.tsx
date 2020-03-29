import React, { ReactNode, ReactElement } from 'react';
import Head from 'next/head';
import { Container } from '..';

interface IMeta {
  title: string;
  description?: string;
  component?: ReactElement;
}

type Props = {
  children: ReactNode | ReactNode[];
  meta: IMeta;
}
export default ({ children, meta }: Props) => (
  <>
    <Head>
      <title>{meta.title} - Dsign</title>
      {meta.description ? <meta name="description" content={meta.description} /> : null}
    </Head>
    <Container style={{ paddingTop: '32px' }}>{children}</Container>
  </>
);