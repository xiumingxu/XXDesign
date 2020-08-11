import React, {FC} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';

interface IconProps {
  icon: string;
  color?: string;
  size?:string;
  action?: string;
  className?: string;
}
export const Icon:FC<IconProps> = (props)=>{
  const {
    icon,
    color,
    size,
    action,
    className
  } = props
  
  const classes = classNames(['icon', className,{
      [`icon-${size}`]: size,
      [`icon-${color}`]: color
    }
  ])
  
  return <div className={classes}>
      <FontAwesomeIcon icon={faCoffee}/>
    </div>
}

export default Icon;