import * as React from 'react';
import { ReactNode, useState, useEffect } from 'react';

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
      <div className="wrapper">
        {children}
      </div>
      <style jsx>{`
        header {
          height: 64px;
          background: var(--color-neutral-bg);
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

        header .wrapper {
          max-width: 1024px;
          margin: 0 auto;
          width: 100%;
          padding: 0 2rem;
          display: flex;
        }

        header .wrapper > :global(div.section) {
          width: 100%;
        }
      `}</style>
    </header>
  );
}