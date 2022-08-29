import React from "react";
import Student from "./Student";
import {useSelector} from "react-redux";

function Students(){

    const students = [
    {
            id:1,
            fname:"Kermit",
            lname:"Frog",
            email: 'kfrog@sesamestreet.com',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg', 
            gpa: 4.0,
            campusId: 1
        },
        {
            id:2,
            fname:"Darth",
            lname:"Vader",
            email: 'dvader@killedhiswife.com',
            imgUrl: 'https://as2.ftcdn.net/v2/jpg/03/13/36/79/1000_F_313367965_7B8Y7JrJ3JAG6zdjw51L59kVQZMlA9K7.jpg', 
            gpa: 4.0,
            campusId: 2
        }];

    return(
        <div className="allStudents">
            {students.map(itm=>
                <Student key={itm.id} data={itm}/>
            )}
        </div>
    )
}

export default Students