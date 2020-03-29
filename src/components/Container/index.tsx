import * as React from 'react';
import { ReactNode, HTMLAttributes } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
}
export default ({ children, ...props }: Props & HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    {children}
    <style jsx>{`
      div {
        max-width: 1024px;
        margin: 0 auto;
        width: 100%;
        padding: 0 2rem;
      }
    `}</style>
  </div>
)