import React, {ChangeEvent, FC, InputHTMLAttributes, ReactElement, ReactNodeArray, RefAttributes, useEffect, useState} from 'react'
import classNames from 'classnames';
import axios from 'axios';
import Input, { InputProps } from '../Input/input'
import Transition from '../Transition';

// export interface AutoCompleteProps{//???  extends InputHTMLAttributes 
//   classname?: string;
//   url: string;
//   // ref?: ; //???
//   // url? string;
// }
//这样可以有 value 的 array
interface DataSourceObject {
  value: string;
}
//??? 这是啥意思 &
export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (url: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  // renderOption 是 DataSourceType 传承一个以 item 为参数的 返回 reactElment 的函数
  renderOption?: (item: DataSourceType) => ReactElement;
}


export const AutoComplete:FC<AutoCompleteProps> = (props)=>{
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [value, setValue] = useState("");

  const[loading, setLoading] =  useState(false)
  // const[showDropDown, setLoading] =  useState(false)

  const {
    classname,
    fetchSuggestions,
    onSelect,
    renderOption,
    // placeholder,
    // ref,
    ...restProps
  } = props;

   const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }
  
  useEffect(()=>{
    if(!value.length){
        setLoading(false)
        setSuggestions([]);
        return;
    }
    const res = fetchSuggestions(value);

    if(res instanceof Promise){
        setLoading(true)
        setSuggestions([]);
      res.then(data=>{
        setLoading(false)
        setSuggestions(data);
      });
    }else{
       setSuggestions(res);
    }
  },[value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  }
  const renderDropDown = ()=>{
     if(loading){
        return <div className="suggstions-loading-icon">
            loading...
          </div>
     }
    //   console.log(suggestions);
    else if(suggestions.length){
      return (
          <ul className="xx-suggestion-list">
             { suggestions.map((item, index)=>{
                return <li key={index} className="suggestion-item"> {renderTemplate(item)} </li>
             })
             }
            
          </ul>
      )
    }else 
          return <></>
  }
  const classes = classNames("xx-auto-complete ", classname)
  return <div className={classes}>
      <Input onChange={handleChange} />
      <Transition
        in={loading}
        animation="zoom-in-top"
        timeout={300}
        onExit={()=>setSuggestions([])}
        >
        
        {renderDropDown()}
      </Transition>
    </div>
}

export default AutoComplete;