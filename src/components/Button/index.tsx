import * as React from 'react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
  type?: 'primary' | 'accent' | 'neutral' | 'warning' | 'success' | 'info';
  outline?: boolean;
  translate?: boolean;
}
export default ({ children, type = 'neutral', outline, translate }: Props) => (
  <button className={`${outline ? 'outline': ''} ${translate ? 'translate' : ''}`}>
    {children}
    <style jsx>{`
      button {
        display: inline-flex;
        min-width: 200px;
        padding: 0 1rem;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        height: 50px;
        transition: all .2s ease 0s;
        background: var(--color-${type}-bg);
        color: var(--color-${type}-fg);
        border: none;
        box-shadow: var(--shadow-small);
      }
      button:hover {
        box-shadow: var(--shadow-medium);
      }
      button.translate:hover {
        transform: translate3d(0px, -1px, 0px);
      }

      button.outline {
        background: var(--color-neutral-bg);
        color: var(--color-${type}-bg);
        border: 2px solid var(--color-${type}-bg);
        box-shadow: none;
        transform: none;
      }
      button.outline:hover {
        background: var(--color-${type}-bg);
        color: var(--color-${type}-fg);
        box-shadow: none;
      }
    `}</style>
  </button>
);