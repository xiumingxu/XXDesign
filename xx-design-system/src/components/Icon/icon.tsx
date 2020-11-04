import React, {FC} from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
import {
  IconProp,

} from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
export type ThemeProps =  "primary" |"secondary" |"success" |"info" |"warning" |"danger" |"light" |"dark" 

export interface IconProps extends FontAwesomeIconProps{
  theme: ThemeProps;
}


export const Icon:FC<IconProps> = (props)=>{
  const {
    theme,
    className,
    icon,
    ...restProps
  } = props
  
  const classes = classNames('xx-icon', className, {
      [`icon-${theme}`]: theme }
  )
  
  return <div className={classes}>
      <FontAwesomeIcon icon={icon} {...restProps} />
    </div>
}

export default Icon;