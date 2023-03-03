import React, { useState } from "react";
import { ISearchBar } from "./ISearchBar";
import "./SearchBar.sass";

export const SearchBar : React.FC<{search:ISearchBar, className?:string}> = (props)=>{
    const [input,setInput] = useState("");
    const [clicked, setClicked] = useState(false)

    return (
        <div className={`searchbar ${clicked ? "clicked" : "start"} ${props.className}`}>
            <input type="text"  onChange={(e)=>setInput(e.target.value)} placeholder={props.search.deafault} onKeyDown={(e)=>e.key==="Enter" ? props.search.search(input) : null} onClick={()=>setClicked(true)}/>
        </div>
    )
} 