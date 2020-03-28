import * as React from 'react';
import { ReactNode } from 'react';
import { ColorType } from 'utils/ThemeContext';

type Props = {
  children: ReactNode | ReactNode[];
  type?: ColorType;
  outline?: boolean;
  translate?: boolean;
  small?: boolean;
}
export default ({ children, type = 'base', outline, translate, small }: Props) => (
  <button className={`${outline ? 'outline': ''} ${translate ? 'translate' : ''} ${small ? 'small' : ''}`}>
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
        background: var(--color-${type});
        color: var(--color-${type}-fg);
        border: none;
        box-shadow: var(--shadow-small);
        margin: 0 0.5rem;
        outline: none;
      }
      button:hover {
        box-shadow: var(--shadow-medium);
      }
      button:active {
        background: var(--color-${type}-dark);
      }
      button:first-child {
        margin: 0 0.5rem 0 0;
      }
      button:last-child {
        margin: 0 0 0 0.5rem;
      }

      button.translate:hover {
        transform: translate3d(0px, -1px, 0px);
      }

      button.outline {
        background: var(--color-background);
        color: var(--color-${type}${type == 'base' ? '-fg' : ''});
        border: 2px solid var(--color-${type}${type == 'base' ? '-fg' : ''});
        box-shadow: none;
        transform: none;
      }
      button.outline:hover {
        background: var(--color-${type}${type == 'base' ? '-fg' : ''});
        color: var(--color-${type}${type == 'base' ? '' : '-fg'});
        box-shadow: none;
      }

      button.small {
        height: 32px;
        min-width: 0;
      }
    `}</style>
  </button>
);