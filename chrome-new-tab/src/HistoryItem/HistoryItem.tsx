import React from 'react'
import './HistoryItem.sass'

export const HistoryItem : React.FC<{item:chrome.history.HistoryItem}> = (props) =>{
    const moveToItem = ()=>{
        if (props.item.url !== undefined)
        {
            window.location.replace(props.item.url)
        }
    }
    
    
    return (
        <div className='historyItem' onClick={moveToItem}>
            {props.item.title}
        </div>
    )
}