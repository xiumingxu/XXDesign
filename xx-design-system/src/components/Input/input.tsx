import React, {FC, ReactElement} from 'react'
import classNames from 'classnames';
import { IconProps } from '../Icon/icon';
export type ThemeProps =  "primary" |"secondary" |"success" |"info" |"warning" |"danger" |"light" |"dark" 
export type InputSize  = "sm" | "lg"
export interface InputProps {
  classname?: string;
  // ??? 什么用 什么时候 用 classname style?: 
  disabled?:boolean; // 这里的 disabled 来控制 
  size?: InputSize;
  icon?: IconProps;
  prepend?: string| ReactElement;
  append?: string| ReactElement;
}


export const Input:FC<InputProps> = (props)=>{
  const {
    classname,
    disabled,
    size,
    icon,
    append, 
    prepend,
    ...restProps
  } = props
  
  const classes = classNames(classname,
      "xx-input-inner",
    {
      [`input-size-${size}`]: size,
    }
  )
  return <div className="xx-input-wrapper"> 
    <input className={classes} 
      disabled={disabled}
      {...restProps}>
    </input>
  </div>
}
Input.defaultProps ={
  disabled: false,


}

export default Input;