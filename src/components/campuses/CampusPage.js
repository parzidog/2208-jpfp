import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Student from "../students/Student";
import List from "../dbList";

function CampusPage(){
    const params = useParams();
   const campuses = List.campuses;
    const students=List.students;

    const campus = campuses.find(itm => Number(params.id)===itm.id);

    const attendingStudents =[];

    students.map(student=>{
        if(student.campusId == campus.id){
            attendingStudents.push(student)
        }
    })

    return(
        <div className='singleCampus'>
            <img src={campus.imgUrl}/>
            <h1>{campus.name}</h1>
            <h3>ADDRESS:<br/><br/>{campus.address}</h3>
            <p>MOTTO:<br/><br/>{campus.description}</p>
            <h2>::Attending Students::</h2>
            <div className="attendingStudents">
            {attendingStudents.map(student=>
            <Student key={student.id} data={student}/>)
            }
            </div>
        </div>
    )
}

export default CampusPage;