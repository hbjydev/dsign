import * as React from 'react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
  noPad?: boolean;
  shadow?: boolean;
}
export default ({
  children,
  noPad = false,
  shadow = false,
}: Props) => (
  <div className={`${noPad !== false && 'nopad'} ${shadow !== false && 'shadow'}`}>
    {children}
    <style jsx>{`
      div {
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid var(--accent-1);
      }
      div.nopad {
        padding: 0;
      }
      div.shadow {
        border: none;
        box-shadow: var(--shadow-medium);
        transition: all .2s ease;
      }
      div.shadow:hover {
        box-shadow: var(--shadow-large);
      }
    `}</style>
  </div>
);