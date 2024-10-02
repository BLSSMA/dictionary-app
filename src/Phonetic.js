import React, {useState} from "react";
import axios from "axios";
import { AiFillSound } from "react-icons/ai";


export default function Phonetic(props){
    let [phoneticSound, setPhoneticSound] = useState(null)

function handleClick(){

      setPhoneticSound (`https://api.dictionaryapi.dev/media/pronunciations/en/${props.phonetic}-us.mp3`);
    }


    function sound(){
    let keyWord = `${props.phonetic}`
    let apiUrlSecondary = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`
    axios.get(apiUrlSecondary).then(handleClick);
    }

 
    return <div><a href={phoneticSound} target="_blank" rel="noreferrer"><AiFillSound onClick={sound}/></a></div>
}