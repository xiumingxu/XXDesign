
import React, { ChangeEvent, FC, useRef } from 'react';
import classNames from 'classnames';
import Button from '../Button/button';
import axios, { AxiosResponse } from 'axios';


export interface UploadProps {
  classname?: string,
  action: string;
  onProgress?: (percentage: number, file: File) => void;
  onError?: (file: File) => void;
  onSuccess?: (data: AxiosResponse, file: File) => void;
  onChange?: (file: File) => void;
  // here is File as a type
  beforeUpload?: (file: File) => boolean | Promise<File>;
}


const Upload: FC<UploadProps> = (props) => {
  const {
    classname,
    action,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
    ...restProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    uploadFiles(files);
  }

  const uploadFiles = (files: FileList) => {
  
    for (const file of Array.from(files)) {
      if(!beforeUpload){
        post(file)
      }else{
        //beforeUpload logic
        const result = beforeUpload(file);
        if(result && result instanceof Promise){
          result.then(processedFile =>{
            post(processedFile)
          })
        }else if(result === true){
          post(file)
        }
      }
    }
  }
  const post = (file:File)=>{
    const formData = new FormData();
      formData.append(file.name, file);
      axios.post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (e: ProgressEvent) => {
          const percentage = Math.round(e.loaded * 100 / e.total) || 0;
          if (percentage < 100 && onProgress)
            onProgress(percentage, file);
        }
      }).then(resp => {
        if (onSuccess)
          onSuccess(resp.data, file);
        if (onChange)
          onChange(file);
      }).catch(error => {
        if (onError) onError(file);
        if(onChange) onChange(file);
      })
  }

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.click();
  }


  const classes = classNames(classname)
  return <div className={classes}>
    <Button onClick={handleClick}>Upload </Button>
    <input ref={inputRef} type="file" style={{ "display": "none" }} onChange={handleUpload} />
  </div>
}
export default Upload;