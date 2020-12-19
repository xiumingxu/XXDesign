import React from 'react';
import { storiesOf } from '@storybook/react'


import { Menu, Item } from './menu';


const menuDefault = () => (
  <>
    <Menu defaultIndex={0}>
      <Item> 1 </Item>
      <Item> 2 </Item>
      <Item> 3 </Item>
    </Menu>
  </>
)
storiesOf('Menu Component', module)
  .add('default horizontal menu', menuDefault)