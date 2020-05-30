import React from 'react';
import { Input, Wrapper, InputGroup } from '../src';

export default {
  title: 'Input',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = () => (
  <Wrapper>
    <InputGroup label="First Name" input={<Input />} />
  </Wrapper>
);

export const inInputGroup = () => (
  <Wrapper>
    <div style={{ display: 'flex', width: '100%' }}>
      <InputGroup
        label="First Name"
        input={<Input />}
        style={{ marginRight: '1em', width: '100%' }}
      />
      <InputGroup
        label="Last Name"
        input={<Input />}
        style={{ width: '100%' }}
      />
    </div>
  </Wrapper>
);
