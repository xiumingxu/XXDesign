import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

const App:React.FC = ()=>{
  const [cb, setCb]= useState('');
  const handleUpload = (e: ChangeEvent<HTMLInputElement>)=>{
    const files = e.target.files;
    const dest = 'https://jsonplaceholder.typicode.com/posts'

    if(files){
      const uploadFile  = files[0];
      const formData = new FormData();
      formData.append(uploadFile.name, uploadFile);
      axios.post(dest,formData, {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      }).then(resp =>{
        setCb(resp.toString());
      })
    }

  }
  return <div className="App">
    
    <input type="file"  name="myFile" onChange={handleUpload}></input>
    <>{cb}</>
  </div>
}
export default App;
