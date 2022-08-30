import React from "react";
import Student from "./Student";
import {useSelector} from "react-redux";
import List from "../dbList";
import Form from "./AddStudent";

function Students(){

    const campuses = List.campuses;
    const students=List.students;
    
    return(
            <div className="addStudent"><Form/></div>
    )
}

export default Students