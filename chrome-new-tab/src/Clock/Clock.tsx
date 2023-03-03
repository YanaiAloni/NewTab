import React from 'react'

const Clock : React.FC<{className?:string}> = (props) => {
    return (
       <div className={`clock ${props.className}`}>

       </div> 
    )
}