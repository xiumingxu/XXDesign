import React, {FC} from 'react';
import { MenuItemProps }  from './menuItem'
import  classNames from 'classnames'
export type modeType = "horizontal" | "vertical"


interface MenuProps {
    mode?: modeType,
    defaultIndex?: number,
    className?: string,
}

export const Menu: FC<MenuProps> = (props)=>{
    const {
        children,
        className,
        mode,
        ...restProps
    } = props;

    const renderChildren = ()=>{
      return React.Children.map(children, (child, index) => {
          // cast to menuItem
          /** FC is not FunctionalComponenetElement/ FC is functinal Component */
            const menuItem = child as React.FunctionComponentElement<MenuItemProps>
            //add if else 
            // React.cloneELement to add more atrribute
            return React.cloneElement(menuItem, {
                // why need to be string???
                index: index.toString()
            });
        })
    }
    const classes = classNames('xx-menu', className, {
        'is-vertical': mode === "vertical"
    })
    return (
        <ul {...restProps} className={classes} >
            {renderChildren()}
        </ul>   
    );
}
Menu.defaultProps = {
    defaultIndex:0,
    mode: 'horizontal'
}

export default Menu;