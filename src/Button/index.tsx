import * as React from 'react';
import { ReactNode } from 'react';

export default ({ children }: { children: ReactNode | ReactNode[] }) => <>
  <button>
    {children}
    <style jsx>{`
      button {
        display: flex;
        min-width: 200px;
        padding: 0 1rem;
        border-radius: 0.5rem;
        justify-content: center;
        align-items: center;
        height: 50px;
        background: #fff;
        border: none;
        box-shadow: 0 5px 24px rgba(0,0,0,0.12);
      }
    `}</style>
  </button>
</>;