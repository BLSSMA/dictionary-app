import React from "react";

export default function Meaning(props){
    return(
<div className="Meaning">
    <p>
        {props.meaning.synonyms}
    </p>
    <p>
        {props.meaning.partOfSpeech}
    </p>
    <p>
        {props.meaning.definition}
        <br />
        < br />
        {props.meaning.example}
    </p>
</div>
    );
}