import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/react'

import { AutoComplete } from './autoComplete';

// export default {
//   title: 'XXDesign/AutoComplete',
//   component: AutoComplete,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

const AutoCompleteBasic = () => (
  <>
    <AutoComplete placeholder="basic input">  </AutoComplete>
  </>
)

storiesOf('AutoComplete Component', module)
  .add('Basic AutoComplete', AutoCompleteBasic)
