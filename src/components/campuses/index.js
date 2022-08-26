import React from "react";
import Campus from "./Campus"
import {useSelector} from "react-redux";

function campuses(){

    const campuses = useSelector(state=>state.campuses.data)

    return(
        <>
            {campuses.map(itm=>
                <Campus key={itm.id} data={itm}/>
            )}
        </>
    )
}

export default campuses