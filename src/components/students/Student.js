import React, {useCallback} from "react";;
import {useNavigate} from "react-router-dom"

function Student(props){

    let id = `/students/${props.data.id}`
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(id, {replace: true}), [navigate]);

    return(
        <button className ='student' onClick={handleOnClick}>
            <img src={props.data.imgUrl}/>
            <h1>{props.data.fname} {props.data.lname}</h1>
        </button>
    )
}

export default Student;