import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Photos from "./Photos";



export default function Results(props){

if (props.results){

    return (
    <div className="Results">
       <section>
        <Photos photo={props.results.word} />
       </section>
     <div>
        <Meaning meaning={props.results.meanings[0]}/>

                <Meaning meaning={props.results.meanings[1]}/>
 
                        <Meaning meaning={props.results.meanings[2]}/>
     </div>
    </div>);
}else{
    return null;
}
}