import React, {FC} from 'react'
import classNames from 'classnames';
import { ThemeProps } from '../Icon/icon';

export interface ProgressProps {
  classname?:string;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps,
  percentage: number;
}


export const Progress:FC<ProgressProps> = (props)=>{
  const {
    percentage,
    classname,
    strokeHeight,
    showText,
    theme,
    ...restProps
  } = props
  
  const classes = classNames(classname)
  return <div className="xx-progress-bar">
    <div className="xx-progress-bar-outer" style={{ height: `${strokeHeight}px`}}>
      <span className={`xx-progress-bar-inner  color-${theme}`} style={{"width": `${percentage}%`}}>
      {showText && <span className="inner-text">{percentage}</span>}
      </span>
      </div>

    </div>
}
Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary'
}
export default Progress;