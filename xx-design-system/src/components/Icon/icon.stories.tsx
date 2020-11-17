import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/react'

import { Icon } from './icon';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// export default {
//   title: 'XXDesign/Icon',
//   component: Icon,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

const IconWithTheme = () => (
  <>
    <Icon theme="primary" icon={faCoffee}> primary Icon </Icon>
    <Icon theme="secondary" icon={faCoffee}> secondary Icon </Icon>
  </>
)

storiesOf('Icon Component', module)
  .add('Icon with theme', IconWithTheme)
