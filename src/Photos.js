import React, {useState} from "react";
import axios from "axios";

export default function Photos(props){
let [photoDisplay, setPhotoDisplay] = useState(null);

function handlePhotos(){
    console.log(props.photo.photos);
   setPhotoDisplay(props.photos.src.landscape)
}

function photoSource(){
    let apiUrlKeyThird = `01dd2bca25c0t00b3d253f443e0of791`;
    let apiUrlThird = `https://api.shecodes.io/images/v1/search?query=${props.photo}&key=${apiUrlKeyThird}`;
    axios.get(apiUrlThird).then(handlePhotos);
}

if (props.photo){
    return( 
        <div>
 <section>{photoDisplay.map(function(photo, index){
            return(<img src={photoSource} key={index} alt={photo.alt}/>)
   })}</section>
 </div>)
}else{ return(null);
}
}
