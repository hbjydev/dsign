import * as React from 'react';
import { ReactNode, useState, useEffect } from 'react';
import Container from 'components/Container';

type Props = {
  children: ReactNode[] | ReactNode;
}
export default ({ children }: Props) => {
  const [scroll, setScroll] = useState(false);
  const onScroll = () => setScroll(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scroll ? 'scrolled' : ''}>
      <Container className="wrapper">
        {children}
      </Container>
      <style jsx>{`
        header {
          height: 64px;
          background: var(--color-background);
          font-size: var(--text-small);
          position: sticky;
          top: 0;
          width: 100%;
          display: flex;
          align-items: center;
          box-shadow: none;
          transition: box-shadow .2s ease;
        }

        header.scrolled {
          box-shadow: var(--shadow-medium);
        }

        header :global(.wrapper) {
          display: flex;
        }
        header :global(.wrapper) > :global(div.section) {
          width: 100%;
        }
      `}</style>
    </header>
  );
}