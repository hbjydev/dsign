import * as React from 'react';
import { HTMLAttributes } from 'react';

type Props = {
  active?: boolean
}
export default ({ active, children, ...props }: Props & HTMLAttributes<HTMLAnchorElement>) => (
  <a className={active ? 'active' : undefined} {...props}>
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