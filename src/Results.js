import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props){

if (props.results){

    return (<div className="Results">
      <h2>{props.results.word}</h2>
      <h3>{props.results.phonetic}</h3>
    
      <Phonetic phonetics={props.results.word}/>
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