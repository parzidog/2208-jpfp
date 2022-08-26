import React from "react";
import Student from "./Student";
import {useSelector} from "react-redux";

function Students(){

   const students = useSelector(state=>state.students.data)

    return(
        <>
            {students.map(itm=>
                <Student key={itm.id} data={itm}/>
            )}
        </>
    )
}

export default Students