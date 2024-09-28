import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    let [keyWord, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    
function handleResponse(response){
    setResults(response.data);
}

function search(event){
    event.preventDefault();
    let apiKey = `01dd2bca25c0t00b3d253f443e0of791`
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`
    axios.get(apiUrl).then(handleResponse);
}   

function handleKeyWordChange(event){
    setKeyword(event.target.value);
    }

    return <div className="Dictionary">
        <div>
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeyWordChange}/>
            </form>
        </div>
            <Results results={results}/>
    </div>;
}