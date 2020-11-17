import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'


import { Button, ButtonProps } from './button';

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   children: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   children: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'lg',
//   children: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'sm',
//   children: 'Button',
// };



// const defaultButton = () => (
//   <Button onClick={action('clicked')}> default button </Button>
// )
const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button disabled> Disabled button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </>
)
storiesOf('Button Component', module)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)