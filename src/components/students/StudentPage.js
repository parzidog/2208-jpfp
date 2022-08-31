import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { selectCampuses } from "../../features/campusesSlice";
import { selectStudents } from "../../features/studentsSlice";
import Campus from "../campuses/Campus";
import { fetchSingleStudent, selectSingleStudent } from "../../features/singleStudentSlice";


function CampusPage(){
    const dispatch = useDispatch();

    const {id} = useParams();
    const studentId = Number(id);
    const campuses = useSelector(selectCampuses);
    const students=useSelector(selectStudents);

    const singleStudent = useSelector(selectSingleStudent)
    const {fname, lname, imgUrl, email, gpa, campusId} = singleStudent

    useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  }, [dispatch]);

    const attendingCampus=[];

    campuses.map(campus=>{
        if(campusId == campus.id){
            attendingCampus.push(campus)
        }
    })

    return(
        <div className='singleStudent'>
            <img className="studentImg" src={imgUrl}/>
            <h1>{fname} {lname}</h1>
            <h3>EMAIL ADDRESS:<br/>{email}</h3>
            <p>GRADE POINT AVERAGE: {gpa}</p>
            <h3>ATTENDING SCHOOL:<br/>{attendingCampus.map(campus=>
            <Campus key={campus.id} data={campus}/>)
            }</h3>
        </div>
    )
}

export default CampusPage;