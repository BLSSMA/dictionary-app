import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
    
    if(props.meaning){
    return(
<div className="Meaning">

    <section>
    <div className="partOfSpeech">
        {props.meaning.partOfSpeech}
    </div>
<hr />

    <div className="synonyms">        
        <Synonyms synonyms={props.meaning.synonyms} />
        </div>
        <div className="definition">
        <strong>Definition: </strong>{props.meaning.definition} 
    </div>
    <div className="example">
       {props.meaning.example}
    </div>
    </section>
    </div>
   )}else{return null}}