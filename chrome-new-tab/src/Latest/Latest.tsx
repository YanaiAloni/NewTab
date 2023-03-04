/*global chrome*/
import { ILatest } from "./ILatest";
import  Card from '@mui/material/Card'
import { useEffect, useState } from "react";
import "./Latest.sass"
import { HistoryItem } from "../HistoryItem/HistoryItem";


export const Latest:React.FC<{latest:ILatest, className?:string}> = (props) => {
    const [history,setHistory] = useState<chrome.history.HistoryItem[]>([])

    useEffect(()=>{
        window.chrome.history.search({text:"", maxResults:props.latest.amount},setHistory)
    })
    
    return (
    <Card style={{backgroundColor: "black", width:"30%" ,height:"30%", color:"#093170"}} className="history">
        <h1>Last {props.latest.amount} searches</h1>
        {history?.map((item:chrome.history.HistoryItem,index:number)=><HistoryItem item={item} key={index}/>)}
    </Card>
    )
}