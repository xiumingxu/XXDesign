import React, { ChangeEvent, useRef } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/react'

import { Input } from './input';
import Icon from '../Icon';
import Button from '../Button';

// export default {
//   title: 'XXDesign/Input',
//   component: Input,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;

const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
  console.log("value", e.target.value);

}
const InputBasic = () => (
  <>
      <Input size="sm" placeholder="input with small size"/> 
      <Input size="lg"placeholder="input with bigger size"/> 
      <Input disabled placeholder="disabled input"/> 
      <Input placeholder="disabled input with prepend and append" prepend="https://" append=".com"/>
      <Input placeholder="with change" onChange={handleChange}/>
      
  </>
)

const InputWithRef = ()=>{
  const inputRef =  useRef<HTMLInputElement>(null);
  const handleClick = ()=> {
    console.log("inputRef", inputRef);
    if(inputRef && inputRef.current){
      inputRef.current.value = "clicked";
      inputRef.current.focus();
    }
  }
  return( 
    <>
      <Button onClick={handleClick}>click</Button>
      <Input placeholder="with value" onChange={handleChange} inputRef={inputRef}/>
   </>
  );
}



// const InputBasic = () => (
//   <>
//    <h3> InputWithDifferentSize</h3>
//      <Input size="sm"/> 
//       <Input size="lg"/> 
//   </>
// )


storiesOf('Input Component', module)
  .add('Basic Input', InputBasic)
  .add('WithVaulueControl Input', InputWithRef)

