import React, {
  FC, useState,
  createContext,
  useContext,
} from 'react'
import classnames from 'classnames';

export type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number;
  mode?: MenuMode;
  className?: string;
  onSelect?: (selectIndex: number) => void
}
// export interface IMenuItem {
//   value: string
//   disabled
// }

export const Menu: React.FC<MenuProps> = (props) => {

  const { defaultIndex, onSelect, children, mode } = props
  const [curIndex, setCurIndex] = useState(defaultIndex)

  const selectHandler = (i: number) => {
    setCurIndex(i);
    onSelect && onSelect(i) //continue to bubble up
  }

  const renderChildren = () => {
      return React.Children.map(children, (child, idx) => {
        const childElement = child as React.FunctionComponentElement<MenuItemProps>
        const { displayName } = childElement.type
        if(displayName === "Item"){
          return React.cloneElement(childElement, {
            index: idx
          })
        } else {
            console.error("Warning: Menu has a child which is not a MenuItem component")
        }
      })
  }
  const passedContext: IMenuContext = {
    curIndex: curIndex ? curIndex : '0',
    onSelect: selectHandler,
    mode,
  }
    return (<ul className="xx-menu">
    <MenuContext.Provider value={passedContext}>
        {renderChildren()}
         </MenuContext.Provider>
    </ul>)
}
interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];  
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

Menu.defaultProps = {
  defaultIndex: 0
}

export interface ItemProps {
  index: number;
}
export const Item: FC<ItemProps> = (props) => {
  const context = useContext(MenuContext)
  const {curIndex, onSelect} = context;
  const { item, index, children } = props

  const klass = classnames("menu-item", {
    "is-active": index === curIndex
  })

  // onSelect 可以用 onSelect 穿进去
  const handleClick = (e) => {
    onSelect && onSelect(index)
  }

  return <li className={klass} onClick={handleClick}> {children} </li>

}
export default Menu;