import React from "react";
function Campus(props){
    return(
        <div>
            <h1>{props.data.name}</h1>
            <img src={props.data.imgUrl}></img>
        </div>
    )
}

export default Campus;