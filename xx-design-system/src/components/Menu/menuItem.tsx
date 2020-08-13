import React, {FC} from 'react';
import classnames from 'classnames';
export type modeType = "horizontal" | "vertical"
export interface MenuItemProps {
    index?: string,
    className?: string
    disabled?: boolean
}

export const MenuItem: FC<MenuItemProps> = (props)=>{
    const {
        children,
        className,
        disabled,
        ...restProps
    } = props;

    const classes = classnames( 'menu-item', className,{
        'disabled': disabled
    })
    
    return (
        <li {...restProps} className={classes} >
            { children }
        </li>   
    );
}

export default MenuItem;