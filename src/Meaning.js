import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    return(
<div className="Meaning">
    <p>
        <Synonyms synonyms={props.meaning.synonyms} />
    </p>
    <p>
        <strong>Part of Speech:</strong> {props.meaning.partOfSpeech}
    </p>
    <p>
        <strong>Definition: </strong>{props.meaning.definition} 
        <br />
        < br />
        <strong>Example: </strong>{props.meaning.example}
    </p>
</div>
    );
}