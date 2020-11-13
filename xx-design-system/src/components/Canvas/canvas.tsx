import React, {FC} from 'react'
import classNames from 'classnames';
import useMouse from '../../hooks/useMouse';
export type ThemeProps =  "primary" |"secondary" |"success" |"info" |"warning" |"danger" |"light" |"dark" 

export interface CanvasProps {
  classname?: string
}     


export const Canvas:FC<CanvasProps> = (props)=>{
  const {
    classname,
    ...restProps
  } = props

  // 用 ref 去来牵制 useMouse
  const canvasRef = React.useRef(null);
  const {x, y} = useMouse(canvasRef);
  
  // how to edit the canvas???
  const classes = classNames(classname)
  return <div className={classes}>
    <div className="canvas-wrapper">
       <canvas {...restProps} ref={canvasRef}>
      </canvas>
    </div>
<span>x: {x}, y: {y}</span>
  </div>
}

export default Canvas;