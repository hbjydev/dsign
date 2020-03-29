import * as React from 'react';
import { ReactNode } from 'react';
import { ColorType } from 'utils/ThemeContext';

type Props = {
  children: ReactNode | ReactNode[];
  color?: ColorType;
  filled?: boolean;
  small?: boolean;
  shadow?: boolean;
}
export default ({ children, color, filled, small, shadow }: Props) => (
  <button className={`${filled ? 'filled': ''} ${small ? 'small' : ''} ${shadow ? 'shadow' : ''}`}>
    {children}
    <style jsx>{`
      button {
        --btn-foreground-base: var(${color ? `--color-${color}` : '--accent-4'});
        --btn-background-base: var(${color ? `--color-${color}-fg` : '--color-background'});
        --btn-border-base: var(${color ? `--color-${color}` : '--accent-1'});

        --btn-foreground-hover: var(${color ? `--color-${color}-fg` : '--color-background'});
        --btn-background-hover: var(${color ? `--color-${color}` : '--color-foreground'});
        --btn-border-hover: var(${color ? `--color-${color}` : '--color-foreground'});
      }
      button {
        display: inline-flex;
        min-width: 200px;
        padding: 0 1rem;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        height: 50px;
        transition: all .2s ease 0s;
        background: var(--btn-background-base);
        color: var(--btn-foreground-base);
        border: 1px solid var(--btn-border-base);
        margin: 0 0.5rem;
        outline: none;
        font-size: var(--text-small);
      }
      button:hover {
        background: var(--btn-background-hover);
        color: var(--btn-foreground-hover);
        border: 1px solid var(--btn-border-hover);
      }
      button:active {
        background: var(--color-dark);
        box-shadow: none;
      }
      button:first-child {
        margin: 0 0.5rem 0 0;
      }
      button:last-child {
        margin: 0 0 0 0.5rem;
      }

      button.filled {
        background: var(--btn-background-hover);
        color: var(--btn-foreground-hover);
        border: 1px solid var(--btn-border-hover);
      }
      button.filled:hover {
        background: var(${color ? '--btn-background-base' : '--btn-foreground-hover'});
        color: var(${color ? '--btn-foreground-base' : '--btn-background-hover'});
        border: 1px solid var(${color ? '--btn-border-base' : '--btn-border-hover'});
      }

      button.shadow {
        box-shadow: var(--shadow-small);
      }
      button.shadow:hover {
        box-shadow: var(--shadow-medium);
        transform: translate3d(0px, -1px, 0px);
      }

      button.small {
        height: 32px;
        min-width: 0;
      }
    `}</style>
  </button>
);