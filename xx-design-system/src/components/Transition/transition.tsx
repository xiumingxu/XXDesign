import React, {FC} from 'react'
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'


export type AnimationTypes  = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation: AnimationTypes
}

export const Transition:FC<TransitionProps> = (props)=>{
  const {
    classNames,
    animation,
    children,
    ...restProps
  } = props
  
  return (
     <CSSTransition 
      classNames= {classNames? classNames: animation}
      {...restProps}>
       {children}
     </CSSTransition>
  )
}

export default Transition;