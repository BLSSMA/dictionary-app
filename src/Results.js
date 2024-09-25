import React, {useState} from "react";
import "./Results.css";
import Meanings from "./Meanings";

export default function Results(props){
let [meaning, setMeaning] = useState("");

function definitionSet(){
    setMeaning(props.results.meanings[0])
}
console.log(props.results.meanings[0]);

if (props.results){
    return (<div className="Results">
        <Results />
            {definitionSet}
      
        <Meanings meanings={meaning} />

    </div>
    );
}else{
    return null;
}
}