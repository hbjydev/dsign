import React from 'react';
import { Wrapper, Button } from '../src';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = () => (
  <Wrapper>
    <Button
      primary={boolean('Primary Theme', false)}
      onClick={action('buttonClick')}
    >
      {text('Value', 'Cancel')}
    </Button>
  </Wrapper>
);
