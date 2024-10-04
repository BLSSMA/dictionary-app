import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Phonetic from "./Phonetic";


export default function Dictionary(props){
    let [keyWord, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);    
    let [photos, setPhotos] = useState(null);
    let [phonetic, setPhonetic] = useState(null);
    let [phoneticText, setPhoneticText] = useState(null);


function handleResponse(response){
    setResults(response.data);
    setPhoneticText(response.data.phonetic);    
}

function handlePhotos(response){
   setPhotos(response.data.photos)
}

function handleClick(){
      setPhonetic (`https://api.dictionaryapi.dev/media/pronunciations/en/${keyWord}-us.mp3`);
    }

function search(){
    let apiKey = `01dd2bca25c0t00b3d253f443e0of791`
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`
    axios.get(apiUrl).then(handleResponse);

    let apiUrlKeyThird = `01dd2bca25c0t00b3d253f443e0of791`;
    let apiUrlThird = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${apiUrlKeyThird}`;
    axios.get(apiUrlThird).then(handlePhotos);
    
    let apiUrlSecondary = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.phonetic}`
    axios.get(apiUrlSecondary).then(handleClick);
    
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
            <em className="examples">Try: lamp, coffee, halt, host etc.</em>
        </div>
       <h2>{keyWord}</h2>
        <h3>{phoneticText}
       <Phonetic phonetic={phonetic}/>
       </h3>
            <Results results={results} /> 
            <Photos photos={photos} />
</div>;
} else {
    load();
    return "loading"
}}