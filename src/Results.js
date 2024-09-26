import React from "react";
import "./Results.css";

export default function Results(props){
console.log(props.results.meanings);

if (props.results){
    return <div className="Results">

      <h2>{props.results.word}</h2>
            <div>
             {props.results.meanings[0].definition}
                </div>

    </div>;
}else{
    return null;
}
}