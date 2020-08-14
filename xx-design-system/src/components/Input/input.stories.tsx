import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/react'

import { Input } from './input';

// export default {
//   title: 'XXDesign/Input',
//   component: Input,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

const InputBasic = () => (
  <>
    <Input placeholder="basic input">  </Input>
  </>
)

storiesOf('Input Component', module)
  .add('Basic Input', InputBasic)
