import React, {ChangeEvent, FC, InputHTMLAttributes, LegacyRef, MutableRefObject, ReactElement, Ref, RefAttributes, RefObject} from 'react'
import classNames from 'classnames';
import { IconProps } from '../Icon/icon';
export type ThemeProps =  "primary" |"secondary" |"success" |"info" |"warning" |"danger" |"light" |"dark" 
export type InputSize  = "sm" | "lg" | "md"

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' > {
  classname?: string;
  // ??? 什么用 什么时候 用 classname style?: 
  disabled?:boolean; // 这里的 disabled 来控制 
  size?: InputSize;
  icon?: IconProps;
  prepend?: string| ReactElement;
  append?: string| ReactElement;
  inputRef?: Ref<HTMLInputElement>;
  /** 很别致呢 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}


export const Input:FC<InputProps> = (props)=>{
  const {
    classname,
    disabled,
    size,
    icon,
    append, 
    prepend,
    inputRef,
    ...restProps /** onchange 被包含了 */
  } = props
  
  const classes = classNames(classname,
      "xx-input-wrapper",
    {
      [`input-size-${size}`]: size,
       'is-disabled': disabled,
       'input-group': prepend || append,
    }
  )

  const fixControlledValue = (value: any) => {
      if (typeof value === 'undefined' || value === null) {
        return ''
      }
      return value
    }

  if( 'value' in props){
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return <div className={classes}> 
    { prepend &&  <div className="xx-input-group-prepend"> {prepend} </div> }
    <input className="xx-input-inner" 
      disabled={disabled}
      ref={inputRef}
      {...restProps}
      />
    { append &&  <div className="xx-input-group-append"> {append} </div> }
  </div>
}
Input.defaultProps = {
  disabled: false,
  size: "md"
}

export default Input;