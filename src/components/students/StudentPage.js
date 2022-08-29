import React from "react";
import {useParams} from "react-router-dom";
import Campus from "../campuses/Campus";


function CampusPage(){
    const params = useParams();
   const campuses = [
  {
        id:1,
        name:"Muppets University",
        imgUrl: 'https://image-cdn.neatoshop.com/styleimg/37466/none/kiwigreen/default/269117-20.jpg',
        address: '123 Sesame Street',
        description: 'A place of learning, a place of knowledge'
         },
    {
        id:2,
        name:"Sith Academy",
        imgUrl: 'https://i.kym-cdn.com/photos/images/original/000/559/643/1b7.png',
        address: '666 Koriban Drive',
        description: 'Through passion, I gain strength. Through strength, I gain power. Through power, I gain victory. Through victory, my chains are broken.'
         },
];

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