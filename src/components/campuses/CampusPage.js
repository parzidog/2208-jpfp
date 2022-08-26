import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function CampusPage(){
    const params = useParams();
    const campuses = useSelector(state=>state.campuses.data);
    const campus = campuses.find(itm => Number(params.id)===itm.id);

    return(
        <div>
            <h1>{campus.name}</h1>
            <img src={campus.imgUrl}/>
        </div>
    )
}

export default CampusPage;