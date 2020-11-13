import React, { RefObject, useState, useEffect } from 'react';


export interface State {
  x: number;
  y: number;
//   posX: number;
//   posY: number;
//   elX: number;
//   elY: number;
//   elH: number;
//   elW: number;
}
function useMouse(ref: RefObject<HTMLElement>): State{
    
    // const [el, setEl] = useState(ref.current as HTMLElement);
    const el = ref.current as HTMLElement;
    const[state, setState] = useState<State>({
        x:0,
        y:0
    })
    // const [x, setX] = 
    let x, y;

    useEffect(()=>{
        const handleMouseMove = (event: MouseEvent) => {
            if (ref && ref.current) {
                const { left, top, width: elW, height: elH } = ref.current.getBoundingClientRect();
                const posX = left + window.pageXOffset;
                const posY = top + window.pageYOffset;
                const elX = event.pageX - posX;
                const elY = event.pageY - posY;
                setState({
                    x: elX,
                    y: elY
                });
            }
        }
        //这里要 document listener
        document.addEventListener('mousemove', handleMouseMove);
        return ()=>document.removeEventListener('mousemove', handleMouseMove);
    }, [ref])
    
    return state
}
export default useMouse;