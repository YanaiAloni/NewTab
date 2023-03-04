import React, { useEffect, useState } from 'react'
import './Clock.sass'

export const Clock : React.FC<{className?:string}> = (props) => {
    const [time, setTime] = useState(new Date(Date.now()).toLocaleString());
    useEffect(()=>{setInterval(()=>setTime(new Date(Date.now()).toLocaleString()),500)})
    return (
       <div className={`clock-holder ${props.className ?? ""}`}>
            <h1 className='time'>{time}</h1>
       </div> 
    )
}