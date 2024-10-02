import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";



export default function Results(props){

if (props.results){

    return (<div className="Results">
      <h2>{props.results.word}</h2>
      <h3>{props.results.phonetic}</h3>
    <div>
       <Phonetic phonetic={props.results.word} />
       </div>
 
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