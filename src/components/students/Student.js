import React, {useCallback} from "react";;
import {useNavigate} from "react-router-dom"

function Student(props){

    let id = `/students/${props.data.id}`
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(id, {replace: true}), [navigate]);

    return(
        <div className ='student'>
            <img src={props.data.imgUrl}/>
            <button onClick={handleOnClick}>{props.data.fname} {props.data.lname}</button>
            <button>X</button>
        </div>
    )
}

export default Student;