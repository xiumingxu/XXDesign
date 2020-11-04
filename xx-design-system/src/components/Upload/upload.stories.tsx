import React, {FC} from 'react'
import Upload from './upload'
import { storiesOf } from '@storybook/react'
const action = 'https://jsonplaceholder.typicode.com/posts'

const props = {action}
const UploadBasic =  ()=> (<Upload {...props}
/>)

storiesOf('Upload Component', module)
  .add('Basic Upload', UploadBasic)
