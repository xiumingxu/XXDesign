import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'


import { Icon, IconProps } from './icon';

export default {
  title: 'XXDesign/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const defaultIcon = () => (
  <Icon onClick={action('clicked')}> default Icon </Icon>
)

const IconWithSize = () => (
  <>
    <Icon size="lg"> large Icon </Icon>
    <Icon size="sm"> small Icon </Icon>
  </>
)

const IconWithType = () => (
  <>
    <Icon btnType="primary"> primary Icon </Icon>
    <Icon btnType="danger"> danger Icon </Icon>
    <Icon disabled> Disabled Icon </Icon>
    <Icon btnType="link" href="https://google.com"> link Icon </Icon>
  </>
)
storiesOf('Icon Component', module)
  .add('Icon', defaultIcon)
  .add('不同尺寸的 Icon', IconWithSize)
  .add('不同类型的 Icon', IconWithType)