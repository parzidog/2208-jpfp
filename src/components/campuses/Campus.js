import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom"
import List from "../dbList";

function Campus(props){
    let id = `/campuses/${props.data.id}`
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(id, {replace: true}), [navigate]);

    return(
        <div className ='campus'>
            <img src={props.data.imgUrl}></img>
            <button onClick={handleOnClick}>{props.data.name}</button>
            <button>X</button>
        </div>
    )
}

export default Campus;