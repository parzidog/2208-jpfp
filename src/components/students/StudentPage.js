import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { selectCampuses } from "../../features/campusesSlice";
import { selectStudents } from "../../features/studentsSlice";
import Campus from "../campuses/Campus";
import { fetchSingleStudent, selectSingleStudent } from "../../features/singleStudentSlice";
import { editStudentAsync } from "../../features/studentsSlice";

function CampusPage(){
    const dispatch = useDispatch();
    
    const {id} = useParams();
    
    const [form, setForm]=React.useState({
        id:id,
        fname:"",
        lname:"",
        email:'',
        imgUrl:'',
        gpa:'',
        campusId:''
    });

    const studentId = Number(id);
    const campuses = useSelector(selectCampuses);
    const students=useSelector(selectStudents);

    let singleStudent = useSelector(selectSingleStudent)
    const {fname, lname, imgUrl, email, gpa, campusId} = singleStudent

    useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  },[form]);

  const handleChange = prop=> event=>{
        setForm({
            ...form,
            [prop]:event.target.value
        })
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        await dispatch(editStudentAsync(form))
        singleStudent = form;
        setForm({
          id:id,
          fname:"",
          lname:"",
          email:'',
          imgUrl:'',
          gpa:'',
          campusId:''
        })
  }

    const attendingCampus=[];

    campuses.map(campus=>{
        if(campusId == campus.id){
            attendingCampus.push(campus)
        }
    })

    let dropdown = campuses.map((campus)=>
    <option value={campus.id} key={`Campus${campus.id}`}>{campus.name}</option>
    )

    return(
        <div className='singleStudent'>
            <img className="studentImg" src={imgUrl}/>
            <h1>{fname} {lname}</h1>
            <h3>EMAIL ADDRESS:<br/>{email}</h3>
            <p>GRADE POINT AVERAGE: {gpa}</p>
            <h3>ATTENDING SCHOOL:<br/>{attendingCampus.map(campus=>
            <Campus key={campus.id} data={campus}/>)
            }</h3>
            <h1>::UPDATE STUDENT::</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' value={form.fname} onChange={handleChange("fname")} placeholder={'First Name'}/><br/>
          <input type='text' value={form.lname} onChange={handleChange("lname")} placeholder={'Last Name'}/><br/>
          <input type='email' value={form.email} onChange={handleChange("email")} placeholder={'Email'}/><br/>
          <input type='text' value={form.imgUrl} onChange={handleChange("imgUrl")} placeholder={'Image URL'}/><br/>
          <input type='number' step='0.01' min='0' max='4' value={form.gpa} onChange={handleChange("gpa")} placeholder={'GPA'}/><br/>
          <select value={form.campusId} onChange={handleChange("campusId")}>
            <option key={'CampusDefault'}>Select a campus</option>
            {dropdown}
          </select><br/>
          <input type='submit' value={'Submit'}/>
         </form>
        </div>
    )
}

export default CampusPage;