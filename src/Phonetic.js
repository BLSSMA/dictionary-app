import React, {useState} from "react";
import axios from "axios";
import { AiFillSound } from "react-icons/ai";


export default function Phonetic(props){
    let [phoneticUrl, setPhoneticUrl] = useState(null)

function setUrl(){
      setPhoneticUrl (`https://api.dictionaryapi.dev/media/pronunciations/en/${props.phonetic}-us.mp3`);
    }


    function handleClick(){
    let apiUrlSecondary = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.phonetic}`
    axios.get(apiUrlSecondary).then(setUrl);
    }

 
    return <div><a href={phoneticUrl} target="_blank" rel="noreferrer"><AiFillSound onClick={handleClick}/></a></div>
}