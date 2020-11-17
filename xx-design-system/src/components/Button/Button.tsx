import React, { ButtonHTMLAttributes, FC,
AnchorHTMLAttributes} from 'react'
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
/**
 * Interface for button types
 */
interface BaseButtonProps {
  size?: ButtonSize;
  btnType?: ButtonType;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  /** Maybe could have url type */
  href?: string;
}
export type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
export type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
/** Partial??? */
export type ButtonProps =  Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props)=>{
  const {
    size, 
    btnType, 
    className, 
    disabled, 
    children, 
    href,
    ...restProps
  } = props;

  // styles
  const classes = classNames('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
     'disabled': disabled
  })

  if(btnType !== "link"){
      return(
        <button className={classes}
          disabled={disabled}
          {...restProps}>
          {children}
        </button>
      )
  }else{
      return(<a className={classes}
          {...restProps}
          href={href}
          target="_">

          {children}
          </a>
      );
    }
}

export default Button;