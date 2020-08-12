import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/react'

import { Icon } from './icon';

// export default {
//   title: 'XXDesign/Icon',
//   component: Icon,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

const IconWithTheme = () => (
  <>
    <Icon theme="primary"> primary Icon </Icon>
    <Icon theme="secondary"> secondary Icon </Icon>
  </>
)

storiesOf('Icon Component', module)
  .add('Icon with theme', IconWithTheme)
