import * as React from 'react';
import { ReactNode } from 'react';

type Props = {
  active?: boolean;
  to: string;
  children?: ReactNode;
}
export default ({ active, children, to }: Props) => (
  <a className={active ? 'active' : undefined} href={to}>
    {children}
    <style jsx>{`
      a {
        padding: 0 0.5rem;
        color: var(--accent-4);
        text-decoration: none;
        transition: color .2s ease;
      }
      a:hover, a.active {
        color: var(--foreground);
      }
      a.active {
        font-weight: bold;
      }
    `}</style>
  </a>
);