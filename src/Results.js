import React from "react";
import "./Results.css";
import Meaning from "./Meaning"

export default function Results(props){

if (props.results){
console.log(props.results.meanings[0].definition);

    return (<div className="Results">
      <h2>{props.results.word}</h2>
      <h3>{props.results.phonetic}</h3>
     <p>
        <Meaning meaning={props.results.meanings[0]}/>
                <Meaning meaning={props.results.meanings[1]}/>
                        <Meaning meaning={props.results.meanings[2]}/>


     </p>
    </div>);
}else{
    return null;
}
}