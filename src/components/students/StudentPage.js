import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function StudentPage(){
    const params = useParams();
    const students = useSelector(state=>state.students.data);
    const student = students.find(itm => Number(params.id)===itm.id);

    return(
        <div>
            <h1>{student.name}</h1>
            <p>Type: {student.type}</p>
        </div>
    )
}

export default StudentPage;