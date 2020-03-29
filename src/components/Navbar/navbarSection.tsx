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
        width: 100%;
        display: flex;
        align-items: center;
      }
    `}</style>
  </div>
)