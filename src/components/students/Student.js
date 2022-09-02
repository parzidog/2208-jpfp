import React, {useCallback} from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { deleteStudentAsync } from '../../features/studentsSlice'

function Student(props){

    const dispatch = useDispatch();
    const navigate = useNavigate()

    let id = props.data.id
    const handleOnClick = useCallback(() => navigate(`/students/${id}`, {replace: true}), [navigate]);
    const handleDelete = async (event)=>{
        event.preventDefault();
        await dispatch(deleteStudentAsync(id));
        window.location.reload();
    }

    return(
        <div className ='student'>
            <img src={props.data.imgUrl}/>
            <button onClick={handleOnClick}>{props.data.fname} {props.data.lname}</button>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Student;