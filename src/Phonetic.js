import React from "react";
import "./Phonetic.css"

import { AiOutlineSound } from "react-icons/ai";

export default function Phonetic(props){

if (props.phonetic){
    return( 
        <div className="Phonetic">
 <section>
           <a href={props.phonetic} target="_blank" rel="noreferrer" className="soundIcon"><AiOutlineSound/>
        </a>

    </section>
 </div>)
}else{ return(null);
}





 
}