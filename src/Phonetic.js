import React, {useState} from "react";
import axios from "axios";

export default function Phonetic(props){
    console.log(props.value.phonetics.audio);
    let [phonetic, setPhonetic] = useState(null);    


function handleResponse(response){
    setPhonetic(response.value.phonetics.audio);
    
}

function search(event){
    event.preventDefault();
    let apiUrlSecondary = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.value}`
    axios.get(apiUrlSecondary).then(handleResponse);
}   


    return (<div className="Phonetics">
        <div>
            <div>{phonetic}</div>
            <form onClick={search}>
                <a href={props.phonetics[0].audio}>Listen</a>
            </form>
        </div>
        </div>);}