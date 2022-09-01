import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCampuses } from '../../features/campusesSlice'
import { addStudentAsync, selectStudents } from '../../features/studentsSlice'
import Student from './Student'

const Form = ()=> {

  const dispatch = useDispatch()

  let students = useSelector(selectStudents)
  const campuses = useSelector(selectCampuses)

  const [list, setList]=React.useState(students)
  const [form, setForm]=React.useState({
        id:"",
        fname:"",
        lname:"",
        email:'',
        imgUrl:'',
        gpa:'',
        campusId:''
      });

      React.useEffect(()=>{
        if(list.length < students.length){
          setList(students);
        }
        });

    const handleChange = prop=> event=>{
        setForm({
            ...form,
            [prop]:event.target.value
        })
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        dispatch(await addStudentAsync(form))
        setList([...list, form])
        setForm({
          id:"",
          fname:"",
          lname:"",
          email:'',
          imgUrl:'',
          gpa:'',
          campusId:''
        })
  }

  let itemsEle = list.map((itm,idx)=>
    <div key={idx}>
      <Student data={itm}/>
    </div>
  )

  let dropdown = campuses.map((campus)=>
    <option value={campus.id} key={`Campus${campus.id}`}>{campus.name}</option>
  )

    return (
      <div id='allStudents'>
        <div className='allStudents'>
          {itemsEle}
        </div>
        <h1>::ADD A NEW STUDENT::</h1>
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

export default Form;