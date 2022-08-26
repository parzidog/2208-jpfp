import React from "react";
function Student(props){
    return(
        <div>
            <h1>{props.data.fname} {props.data.lname}</h1>
            <img src={props.data.imgUrl}/>
        </div>
    )
}

export default Student;