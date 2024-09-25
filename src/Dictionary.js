import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyWord, setKeyword] = useState("");

function search(event){
    event.preventDefault();
    alert(`searching for ${keyWord}`);
 }   
function handleKeyWordChange(event){
    setKeyword(event.target.value);

    }

    return <div className="Dictionary">
        <div>
            <form onSubmit={search}>
                <input type="search" autoFocus={true} onChange={handleKeyWordChange}/>
                <input type="submit" />
            </form>
        </div>
    </div>;
}