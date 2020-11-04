import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/react'

import { BarChart } from './barChart';

// export default {
//   title: 'XXDesign/BarChart',
//   component: BarChart,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

const BarChartBasic = () => (
  <>
    <BarChart>  </BarChart>
  </>
)

storiesOf('BarChart Component', module)
  .add('Basic BarChart', BarChartBasic)
