
import React, { ChangeEvent, FC, useRef, useState} from 'react';
import classNames from 'classnames';
import Button from '../Button/button';
import axios, { AxiosError, AxiosResponse } from 'axios';
import UploadList from './uploadlist';
import Dragger from './dragger';

type UploadFileStatus = 'ready' | 'success' | 'error' | 'processing'
export interface UploadFile{
  uid: string;
  size: number;
  name:string;
  percentage: number;
  status?: UploadFileStatus;
  raw?: File;
  response?: AxiosResponse;
  error?: AxiosError;
}
export interface UploadProps {
  classname?: string,
  action: string;
  onProgress?: (file:UploadFile) => void;
  onError?: (file: File) => void;
  onSuccess?: (data: AxiosResponse, file: File) => void;
  onChange?: (file: File) => void;
  // here is File as a type
  beforeUpload?: (file: File) => boolean | Promise<File>;
  drag?: boolean;
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
    children,
    drag,
    ...restProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] =  useState<UploadFile[]>([]);

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
    const _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      percentage: 0,
      raw: file,
      size: file.size,
      name: file.name,
      status: 'ready',
    }
    setFileList(fileList.concat(_file));
    const formData = new FormData();
      formData.append(file.name, file);
      axios.post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (e: ProgressEvent) => {
          const percentage = Math.round(e.loaded * 100 / e.total) || 0;
          updateFileList(_file, {status: 'processing', percentage});
          if (percentage < 100 && onProgress)
              onProgress({..._file, percentage});
        }
      }).then(resp => {
        updateFileList(_file, {status: 'success', response: resp})
        if (onSuccess)
          onSuccess(resp.data, file);
        if (onChange)
          onChange(file);
      }).catch(error => {
        updateFileList(_file, { status: 'error', error: error })
        if (onError) onError(file);
        if(onChange) onChange(file);
      })
  }
  const updateFileList = (uploadFile:UploadFile, updateObj:Partial<UploadFile>)=>{
    setFileList((prevList)=>{
      return prevList.map(file=>{
        if(file.uid === uploadFile.uid){
          return {...uploadFile, ...updateObj}
        }else{
          return file;
        }
      })
    })
  }

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.click();
  }
  const subInput  = children? children: 
    <Button >Upload </Button>


  const classes = classNames(classname, "xx-upload-input")
  return <div className="xx-upload-component">
    <div className="xx-`upload` -input" onClick={handleClick}>
      {drag ? <Dragger onDragDrop={(files)=>uploadFiles(files)}>
        {children}
      </Dragger> : subInput}
      
    </div>
    <input ref={inputRef} type="file" style={{ "display": "none" }} onChange={handleUpload} />
    <UploadList fileList={fileList} />
  </div>
}
Upload.defaultProps = {
  drag: true
}
export default Upload;