import React, {FC} from 'react'
import classNames from 'classnames';
export type ThemeProps =  "primary" |"secondary" |"success" |"info" |"warning" |"danger" |"light" |"dark" 

export interface AutoCompleteProps {
  classname:string
}


export const AutoComplete:FC<AutoCompleteProps> = (props)=>{
  const {
    classname,
    ...restProps
  } = props
  
  const classes = classNames(classname)
  return <div className={classes}>
    </div>
}

export default AutoComplete;