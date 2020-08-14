import React, {FC, InputHTMLAttributes, RefAttributes, useEffect} from 'react'
import classNames from 'classnames';
import axios from 'axios';
export type ThemeProps =  "primary" |"secondary" |"success" |"info" |"warning" |"danger" |"light" |"dark" 

export interface AutoCompleteProps{//???  extends InputHTMLAttributes 
  classname?: string;
  // ref?: ; //???
  // url? string;
}


export const AutoComplete:FC<AutoCompleteProps> = (props)=>{
  // useEffect(()=>{
  //   const res = await axios.get(url);
  //   const dataArray = res.data;
  // })
  
  const {
    // url,
    classname,
    // placeholder,
    // ref,
    ...restProps
  } = props
  
  const classes = classNames(classname)
  return <div className={classes}>
    </div>
}

export default AutoComplete;