import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/react'

import { Transition } from './transition';
import {Icon} from '../Icon/icon'
import {faCalculator} from '@fortawesome/free-solid-svg-icons'
import Button from '../Button';

// export default {
//   title: 'XXDesign/Icon',
//   component: Icon,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

const TransitionIcon = () => {
  const[start, setStart] = useState(false);
  const toggleStart = () =>{
    console.log(start);
    setStart(!start);
  }
  return(
    <div>
    <Button btnType="primary" onClick={()=>toggleStart()}>Start Animation </Button>
    <Transition animation="zoom-in-bottom"
      in={start}
      timeout={300}>
      <Icon theme="primary" icon={faCalculator}></Icon>
    </Transition>
    </div>
  );
}

storiesOf('Transition Component', module)
  .add('Icon with transition', TransitionIcon)
