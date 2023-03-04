import React from 'react'
import './SiteItem.sass'

export const SiteItem : React.FC<{site:string,amount:number}> = (props) =>{
    const moveToItem = ()=>{
        if (props.site !== undefined)
        {
            window.location.replace(props.site)
        }
    }
    
    
    return (
        <div className='historyItem' onClick={moveToItem}>
            <span className='site'>
                {props.site}
            </span>
            <span className='amount'>
                {props.amount}
            </span>
        </div>
    )
}