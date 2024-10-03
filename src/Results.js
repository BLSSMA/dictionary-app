import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Photos from "./Photos"


export default function Results(props){

if (props.results){

    return (
    <div className="Results">
        <section>
      <h2>{props.results.word}</h2>
      </section>
      <section>
        <div className="phonetics">    
      <h3>{props.results.phonetic}</h3>
   <Phonetic phonetic={props.results.word}/>
       </div>
       <section>
        <Photos photo={props.results.word} />
       </section>
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