import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props){
    let [keyWord, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);    


function handleResponse(response){
    setResults(response.data);
    
}


function search(){
    let apiKey = `01dd2bca25c0t00b3d253f443e0of791`
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`
    axios.get(apiUrl).then(handleResponse);

}   

function handleKeyWordChange(event){
    setKeyword(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function load(){
        setLoaded(true)
        search();
    }
if(loaded){
    return <div className="Dictionary">
        <h1>What Word Would You Like To Look Up?</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" autoFocus={true} onChange={handleKeyWordChange}
                defaultValue={props.defaultKeyword}/>
            </form>
        </div>
            <Results results={results} />
    </div>;
} else {
    load();
    return "loading"
}}