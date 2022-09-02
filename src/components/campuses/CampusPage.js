import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Student from "../students/Student";
import { selectCampuses } from "../../features/campusesSlice";
import { selectStudents } from "../../features/studentsSlice";
import { fetchSingleCampus, selectSingleCampus } from "../../features/singleCampusSlice";
import { editCampusAsync } from "../../features/campusesSlice";

function CampusPage(){
    const dispatch = useDispatch();
    
    
    const {id} = useParams();
    
    const [form, setForm]=React.useState({
        id:id,
        name:"",
        imgUrl:'',
        address:"",
        description:'',
    });

    const handleChange = prop=> event=>{
        setForm({
            ...form,
            [prop]:event.target.value
        })
    }

    const campusId = Number(id)
    const campuses = useSelector(selectCampuses)
    const students = useSelector(selectStudents)

    let singleCampus = useSelector(selectSingleCampus)
    const {name, description, address, imgUrl} = singleCampus.info

    useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [form]);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        await dispatch(editCampusAsync(form))
        singleCampus = form;
        setForm({
            id:id,
        name:"",
        imgUrl:'',
        address:"",
        description:'',
        })
  }

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
            <div key={'students'} className="attendingStudents">
            {attendingStudents.map(student=>
                <Student key={student.id} data={student}/>
            )}
            <h1>::EDIT CAMPUS::</h1>
            </div>
            <form onSubmit={handleSubmit}>
            <input type='text' value={form.name} onChange={handleChange("name")} placeholder={'Campus Name'}/><br/>
            <input type='text' value={form.imgUrl} onChange={handleChange("imgUrl")} placeholder={'Image URL'}/><br/>
            <input type='text' value={form.address} onChange={handleChange("address")} placeholder={'Address'}/><br/>
            <input type='description' value={form.description} onChange={handleChange("description")} placeholder={'Description'}/><br/>
            <input type='submit' value={'Submit'}/>
            </form>
        </div>
    )
}

export default CampusPage;