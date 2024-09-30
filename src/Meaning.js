import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props){
    return(
<div className="Meaning">
    <div>
        <Synonyms synonyms={props.meaning.synonyms} />
    </div>
    <div>
        <strong>Part of Speech:</strong> {props.meaning.partOfSpeech}
    </div>
    <div>
        <strong>Definition: </strong>{props.meaning.definition} 
 </div> 
 <div>
        <strong>Example: </strong>{props.meaning.example}
</div>
</div>
    )
}