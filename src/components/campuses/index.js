import React from "react";
import Campus from "./Campus"
import {useSelector} from "react-redux";
import List from "../dbList";
import Form from "./AddCampus";

function campuses(){

    const campuses = List.campuses;
    const students=List.students;

    return(
        <div className="allCampuses"><Form/></div>
    )
}

export default campuses