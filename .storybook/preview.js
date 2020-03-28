import React from 'react';
import { addDecorator } from '@storybook/react';
import Dsign from '..';

addDecorator(story => (
  <Dsign>
    {story()}
  </Dsign>
));
