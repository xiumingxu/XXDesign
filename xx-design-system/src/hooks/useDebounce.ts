import React, {useEffect, useState} from 'react';


/**
 * 
 * @param value  也不一定一定是 string
 * @param delay millionseconds 
 */
function useDebounce (v: any, delay:number){
    const[value, setValue] = useState(v);

    //如果很多次被连续调用怎么办, value 改变才会调用, 就会马上情况清掉上次的
    //用了 useEffect 的特性
    /**
     * When exactly does React clean up an effect? 
     * React performs the cleanup when the component unmounts. 
     * However, as we learned earlier, effects run for every render and not just once.
     *  This is why React also cleans up effects from the previous render before running the effects next time.
     *  We’ll discuss why this helps avoid bugs and how to opt out of this behavior in case it creates performance issues later below.
     */
    useEffect(()=>{ 
        const handler = window.setTimeout(() => {
            setValue(v)
        }, delay)
        return ()=> {
            clearTimeout(handler);
        }        
    },[v, delay])

    return value;
}

export default useDebounce;
