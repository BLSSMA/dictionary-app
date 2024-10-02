import React from "react";

export default function Synonyms(props){
    if (props.synonyms){
    return(
        <div>

        <div className="Synonyms">
            <strong>Synonyms: </strong>{props.synonyms.map(function(synonyms, index){
    return <span key={index}>{synonyms} </span>
})}
    </div></div>

    );}else{return null;}
}