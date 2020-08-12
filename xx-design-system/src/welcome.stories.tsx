import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
       <h1> XX Design System </h1>
      </>
    )
  }, { info : { disable: true }})