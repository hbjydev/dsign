import * as React from 'react';
import { HTMLAttributes } from 'react';

type Props = {
  small?: boolean;
  large?: boolean;
  rounded?: boolean;
  round?: boolean;
};
export default ({ small, large, rounded, round, ...props }: HTMLAttributes<HTMLImageElement> & Props) => (
  <>
    <img className={`
      ${small ? 'small' : ''}
      ${large ? 'large' : ''}
      ${rounded ? 'rounded' : ''}
      ${round ? 'round' : ''}
    `.trim()} {...props} />
    <style jsx>{`
      img {
        width: 64px;
        height: 64px;
        object-fill: cover;
      }
      img.small {
        width: 32px;
        height: 32px;
      }
      img.large {
        width: 128px;
        height: 128px;
      }
      img.rounded {
        border-radius: 5px;
      }
      img.round {
        border-radius: 9999px;
      }
    `}</style>
  </>
)