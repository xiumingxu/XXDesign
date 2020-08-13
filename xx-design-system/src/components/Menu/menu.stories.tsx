import { storiesOf } from '@storybook/react'
import React from 'react';
import Menu from './menu'
import MenuItem from './menuItem'


const defaultMenu = () => (
    <Menu>
        <MenuItem> test1 </MenuItem>
        <MenuItem disabled> test2 </MenuItem>
    </Menu>
);
storiesOf("Menu", module)
.add("Default Menu", defaultMenu)