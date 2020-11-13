import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/react'

import Canvas  from './canvas';

// export default {
//   title: 'XXDesign/Canvas',
//   component: Canvas,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

const CanvasBasic = () => (
  <>
    <Canvas/>  
  </>
)

storiesOf('Canvas Component', module)
  .add('Basic Canvas', CanvasBasic)
