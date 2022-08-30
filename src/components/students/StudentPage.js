import React from "react";
import {useParams} from "react-router-dom";
import Campus from "../campuses/Campus";
import List from "../dbList";


function CampusPage(){
    const params = useParams();
    const campuses = List.campuses;
    const students=List.students;
    const student = students.find(itm => Number(params.id)===itm.id);

        const attendingCampus=[];

    campuses.map(campus=>{
        if(student.campusId == campus.id){
            attendingCampus.push(campus)
        }
    })

    return(
        <div className='singleStudent'>
            <img className="studentImg" src={student.imgUrl}/>
            <h1>{student.fname} {student.lname}</h1>
            <h3>EMAIL ADDRESS:<br/>{student.email}</h3>
            <p>GRADE POINT AVERAGE: {student.gpa}</p>
            <h3>ATTENDING SCHOOL:<br/>{attendingCampus.map(campus=>
            <Campus key={campus.id} data={campus}/>)
            }</h3>
        </div>
    )
}

export default CampusPage;