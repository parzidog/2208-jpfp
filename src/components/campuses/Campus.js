import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom"

function Campus(props){
    let id = `/campuses/${props.data.id}`
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(id, {replace: true}), [navigate]);

    return(
        <button className ='campus' onClick={handleOnClick}>
            <img src={props.data.imgUrl}></img>
            <h1>{props.data.name}</h1>
        </button>
    )
}

export default Campus;