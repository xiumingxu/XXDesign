import React, {FC} from 'react'
import classNames from 'classnames';
export type ThemeProps =  "primary" |"secondary" |"success" |"info" |"warning" |"danger" |"light" |"dark" 

export interface BarChartProps {
  classname?: string
}


export const BarChart:FC<BarChartProps> = (props)=>{
  const {
    classname,
    ...restProps
  } = props
  
  const classes = classNames(classname)
  return <div className={classes}>
    </div>
}

export default BarChart;
