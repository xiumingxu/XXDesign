
import React, {FC, useRef} from 'react';
import classNames from 'classnames';
import Button from '../Button/button'

// export default {
//   title: 'XXDesign/AutoComplete',
//   component: AutoComplete,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as Meta;
export interface UploadProps {
  classname?:string,
  action?: string;
  onProgress?: (percentage:number) => void;
  onError?: ()=>void;
  onSuccess?: (message:string)=>void;
}


const Upload:FC<UploadProps> = (props)=>{
  const {
    classname, 
    action,
    onProgress,
    ...restProps
  } = props;
  
  const handleUpload = (e: ChangeEvent<HTMLInputElement>)=>{
    const files = e.target.files;

    if(files){
      const uploadFile  = files[0];
      const formData = new FormData();
      formData.append(uploadFile.name, uploadFile);
      axios.post(action,formData, {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      }).then(resp =>{
        setCb(resp.toString());
      })
    }
  }
  const handleClick = ()=>{
    if(inputRef === null) 
      return;
    inputRef.current.click();

  }
  const inputRef = useRef(null);

  const classes = classNames(classname)
  return <div className={classes}>
      <Button onClick={handleClick}>Upload </Button>
      <input ref={inputRef} type="file" style={{"display": "none"}} onClick={handleUpload}/>
   </div>
}
export default Upload;