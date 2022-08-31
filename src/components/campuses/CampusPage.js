import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Student from "../students/Student";
import { selectCampuses } from "../../features/campusesSlice";
import { selectStudents } from "../../features/studentsSlice";
import { fetchSingleCampus, selectSingleCampus } from "../../features/singleCampusSlice";

function CampusPage(){
    const dispatch = useDispatch();

    const {id} = useParams();
    const campusId = Number(id)
    const campuses = useSelector(selectCampuses)
    const students = useSelector(selectStudents)

    const singleCampus = useSelector(selectSingleCampus)
    const {name, description, address, imgUrl} = singleCampus.info

    useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [dispatch]);

    const attendingStudents =[];

    students.map(student=>{
        if(student.campusId == campusId){
            attendingStudents.push(student)
        }
    })

    return(
        <div className='singleCampus'>
            <img src={imgUrl}/>
            <h1>{name}</h1>
            <h3>ADDRESS:<br/><br/>{address}</h3>
            <p>MOTTO:<br/><br/>{description}</p>
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