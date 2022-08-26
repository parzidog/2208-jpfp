const initState = {
    data:[
        {
            id:1,
            fname:"Kermit",
            lname:"Frog",
            email: 'kfrog@sesamestreet.com',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg', 
            gpa: 4.0
        }
    ]
}


const studentReducer = (state=initState, action)=>{
    return state;
}

export default studentReducer;