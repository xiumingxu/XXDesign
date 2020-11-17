import React, { FC } from 'react'
import Upload, { UploadFile } from './upload'
import { storiesOf } from '@storybook/react'
import { resolve } from 'dns';
import { rejects } from 'assert';
// const action = 'https://jsonplaceholder.typicode.com/posts/'
const action = 'https://run.mocky.io/v3/29248ed0-4879-4905-bdce-2a724106f482';
const onProgress = (file: UploadFile) => console.log("file:", file);
const onSuccess = () => console.log("success")
const onError = () => console.log("error");
let beforeUpload;
const onChange = () => console.log("onChange");
const checkFileSize = (file:File)=>{
  if(file.size >  50 * 1024){
    console.log("file is too big");
    return false;
  }
  return true;
}
const renameFile = (file:File)=>{
  const newfile = new File([file], "newfile.jpg", {type:file.type});
  // return Promise.resolve(newfile);
  return new Promise((resolve) => resolve(newfile))
}
beforeUpload = renameFile;

const props = {
  action, onProgress,
  onSuccess,onError,
  // beforeUpload
  onChange
}
const UploadBasic = () => (<Upload {...props}
/>)

storiesOf('Upload Component', module)
  .add('Basic Upload', UploadBasic)
